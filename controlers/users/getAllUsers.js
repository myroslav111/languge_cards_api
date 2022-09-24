const contacts = require('../../models/users');

const getAllUsers = async (_, res) => {
  const result = await contacts.listOfUsers();
  res.json(result);
};

module.exports = getAllUsers;
