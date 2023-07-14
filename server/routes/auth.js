const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Sender } = require('../models/sender');
const { Biker } = require('../models/biker');
const express = require('express');
const router = express.Router();

router.post('/sender', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let sender = await Sender.findOne({ email: req.body.email });
  if (!sender) {
    return res.status(400).send('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(
    req.body.password,
    sender.password
  );
  if (!validPassword) {
    return res.status(400).send('Invalid email or password');
  }
  const token = sender.generateAuthToken();
  res.send({ token: token });
});

router.post('/biker', async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let biker = await Biker.findOne({ email: req.body.email });
  if (!biker) {
    return res.status(400).send('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(req.body.password, biker.password);
  if (!validPassword) {
    return res.status(400).send('Invalid email or password');
  }
  const token = biker.generateAuthToken();
  res.send({ token: token });
});

const validate = (req) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(req);
};

module.exports = router;
