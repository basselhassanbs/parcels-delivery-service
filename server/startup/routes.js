const cors = require('cors');
const express = require('express');
const parcels = require('../routes/parcels');
const senders = require('../routes/senders');
const bikers = require('../routes/bikers');
const auth = require('../routes/auth');

module.exports = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use('/api/parcels', parcels);
  app.use('/api/senders', senders);
  app.use('/api/bikers', bikers);
  app.use('/api/auth', auth);
};
