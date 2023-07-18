require('dotenv').config();
const config = require('config');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

require('./startup/db')();
require('./startup/routes')(app);
require('./seeder/seedUsers')();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
