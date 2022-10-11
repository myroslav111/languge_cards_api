const { User } = require('../../models/user');

const getAllUsers = async (_, res) => {
  const result = await User.find();
  res.json(result);
};

module.exports = getAllUsers;
