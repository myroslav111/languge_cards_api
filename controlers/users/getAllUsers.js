const { Card } = require('../../models/users');

const getAllUsers = async (_, res) => {
  const result = await Card.find();
  res.json(result);
};

module.exports = getAllUsers;
