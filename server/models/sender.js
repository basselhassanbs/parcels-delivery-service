const Joi = require('joi');
const mongoose = require('mongoose');
const { createToken } = require('../helpers/jwt');

const senderSchema = new mongoose.Schema({
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

senderSchema.methods.generateAuthToken = function () {
  const token = createToken({
    _id: this._id,
    role: 'sender',
  });

  return token;
};

const Sender = mongoose.model('Sender', senderSchema);

const validateSender = (sender) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(sender);
};

exports.Sender = Sender;
exports.validate = validateSender;
