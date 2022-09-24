const contacts = require('../../models/users');
const { RequestError } = require('../../helpers');

const getUserCurrentLang = async (req, res) => {
  const { email, lang } = req.params;
  console.log(req.params);
  const result = await contacts.getUserLang(email, lang);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getUserCurrentLang;
