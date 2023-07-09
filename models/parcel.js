const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  pickUpAddress: {
    type: String,
    required: true,
  },
  dropOffAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['waiting', 'picked', 'delivered'],
    default: 'waiting',
  },
  pickUpTime: {
    type: Date,
  },
  dropOffTime: {
    type: Date,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sender',
    required: true,
  },
  biker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Biker',
  },
});

const Parcel = mongoose.model('Parcel', parcelSchema);

const validateParcel = (parcel) => {
  const schema = Joi.object({
    description: Joi.string().required(),
    pickUpAddress: Joi.string().required(),
    dropOffAddress: Joi.string().required(),
    status: Joi.string(),
    pickUpTime: Joi.date(),
    dropOffTime: Joi.date(),
    sender: Joi.objectId().required(),
    biker: Joi.objectId(),
  });
  return schema.validate(parcel);
};

exports.Parcel = Parcel;
exports.validate = validateParcel;
