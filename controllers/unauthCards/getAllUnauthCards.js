const { unauthCard } = require('../../models/unauthCard');

const getAllUsers = async (_, res) => {
  const result = await unauthCard.find();
  res.json(result);
};

module.exports = getAllUsers;
