const { unauthCard } = require('../../models/unauthCard');

const addWord = async (req, res) => {
  const result = await unauthCard.create(req.body);
  res.status(201).json(result);
};

module.exports = addWord;
