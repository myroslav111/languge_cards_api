const {User} = require('../../models/user');
const { RequestError } = require('../../helpers');

const getUserCurrentLang = async (req, res) => {
  const { email, lang } = req.params;

  const result = await User.getUserLang(email, lang);
  console.log('getUserCurrentLang', result);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getUserCurrentLang;








// const contacts = require('../../models/users');
// const { RequestError } = require('../../helpers');

// const getUserCurrentLang = async (req, res) => {
//   const { email, lang } = req.params;

//   const result = await contacts.getUserLang(email, lang);
//   console.log('getUserCurrentLang', result);
//   if (!result) {
//     throw RequestError(404, 'Not found');
//   }
//   res.json(result);
// };

// module.exports = getUserCurrentLang;
