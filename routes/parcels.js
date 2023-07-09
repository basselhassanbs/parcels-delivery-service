const auth = require('../middleware/auth');
const { Parcel, validate } = require('../models/parcel');
const express = require('express');
const { Sender } = require('../models/sender');
const allowed = require('../middleware/allowed');
const router = express.Router();

router.get('/bikerParcels', [auth, allowed('biker')], async (req, res) => {
  const parcels = await Parcel.find({ biker: req.user._id });
  res.send(parcels);
});

router.get('/waiting', [auth, allowed('biker')], async (req, res) => {
  const parcels = await Parcel.find({ status: 'waiting' });
  res.send(parcels);
});

router.get('/senderParcels', [auth, allowed('sender')], async (req, res) => {
  const parcels = await Parcel.find({ sender: req.user._id });
  res.send(parcels);
});

router.post('/', [auth, allowed('sender')], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const parcel = new Parcel({
    description: req.body.description,
    pickUpAddress: req.body.pickUpAddress,
    dropOffAddress: req.body.dropOffAddress,
    sender: req.user._id,
  });
  await parcel.save();

  res.send(parcel);
});

router.patch('/:id/pickup', [auth, allowed('biker')], async (req, res) => {
  let parcel = await Parcel.findById(req.params.id);
  if (!parcel)
    return res.status(404).send('The parcel with the given ID was not found.');

  if (parcel.status !== 'waiting')
    return res
      .status(400)
      .send("The parcel with the given ID can't be picked.");

  parcel.set({
    status: 'picked',
    biker: req.user._id,
  });
  parcel = await parcel.save();

  res.send(parcel);
});

router.patch('/:id/deliver', [auth, allowed('biker')], async (req, res) => {
  let parcel = await Parcel.findById(req.params.id);
  if (!parcel)
    return res.status(404).send('The parcel with the given ID was not found.');

  if (parcel.biker !== req.user._id || parcel.status !== 'picked')
    return res
      .status(400)
      .send("The parcel with the given ID can't be delivered.");

  parcel.set({
    status: 'delivered',
  });
  parcel = await parcel.save();

  res.send(parcel);
});

module.exports = router;
