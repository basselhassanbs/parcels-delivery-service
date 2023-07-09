const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Biker, validate } = require('../models/biker');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let biker = await Biker.findOne({ email: req.body.email });
  if (biker) {
    return res.status(400).send('User already registered.');
  }

  biker = new Biker(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  biker.password = await bcrypt.hash(biker.password, salt);
  await biker.save();

  const token = biker.generateAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(biker, ['_id', 'name', 'email']));
});

module.exports = router;
