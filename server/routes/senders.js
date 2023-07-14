const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Sender, validate } = require('../models/sender');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let sender = await Sender.findOne({ email: req.body.email });
  if (sender) {
    return res.status(400).send('User already registered.');
  }

  sender = new Sender(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  sender.password = await bcrypt.hash(sender.password, salt);
  await sender.save();

  const token = sender.generateAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(sender, ['_id', 'name', 'email']));
});

module.exports = router;
