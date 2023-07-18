const { Biker } = require('../models/biker');
const { Sender } = require('../models/sender');

module.exports = () => {
  const bikers = [];
  const senders = [];
  const password =
    '$2b$10$ZnmoVw2sHR/xy/7Yzs6PPe8ZOur6EhXv28Ly7Hfz8RhHTqVJ..YRW';
  for (let i = 0; i < 10; i++) {
    const name = `biker${i + 1}`;
    const email = `biker${i + 1}@gmail.com`;
    bikers.push({
      name,
      email,
      password,
    });
  }
  for (let i = 0; i < 5; i++) {
    const name = `sender${i + 1}`;
    const email = `sender${i + 1}@gmail.com`;
    senders.push({
      name,
      email,
      password,
    });
  }
  Biker.countDocuments().then((res) => {
    if (res === 0) {
      Biker.insertMany(bikers, { upsert: true })
        .then((docs) =>
          console.log(
            `${docs.length} bikers have been inserted into the database.`
          )
        )
        .catch((err) => console.log(err));
    }
  });
  Sender.countDocuments().then((res) => {
    if (res === 0) {
      Sender.insertMany(senders, { upsert: true })
        .then((docs) =>
          console.log(
            `${docs.length} senders have been inserted into the database.`
          )
        )
        .catch((err) => console.log(err));
    }
  });
};
