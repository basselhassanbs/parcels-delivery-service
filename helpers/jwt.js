const jwt = require('jsonwebtoken');
const config = require('config');

const createToken = (payload) => {
  const token = jwt.sign(payload, config.get('jwtPrivateKey'));
  return token;
};

const checkToken = (token) => {
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  return decoded;
};

exports.createToken = createToken;
exports.checkToken = checkToken;
