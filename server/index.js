const cors = require('cors');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const parcels = require('./routes/parcels');
const senders = require('./routes/senders');
const bikers = require('./routes/bikers');
const auth = require('./routes/auth');
const app = express();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27017/delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB...', err));

app.use('/api/parcels', parcels);
app.use('/api/senders', senders);
app.use('/api/bikers', bikers);
app.use('/api/auth', auth);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
