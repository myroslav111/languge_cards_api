const contacts = require('../../models/users');
const { RequestError } = require('../../helpers');

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const result = await contacts.getUserByEmail(email);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getUserByEmail;
