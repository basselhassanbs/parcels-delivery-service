const Joi = require('joi');
const mongoose = require('mongoose');
const { createToken } = require('../helpers/jwt');

const bikerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 1024,
  },
});

bikerSchema.methods.generateAuthToken = function () {
  const token = createToken({
    _id: this._id,
    role: 'biker',
  });

  return token;
};

const Biker = mongoose.model('Biker', bikerSchema);

const validateBiker = (biker) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(biker);
};

exports.Biker = Biker;
exports.validate = validateBiker;
