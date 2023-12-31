const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect('mongodb://mongo:27017/delivery', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connect to MongoDB...', err));
};
