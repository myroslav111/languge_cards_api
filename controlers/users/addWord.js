const { Card } = require('../../models/users');

const addWord = async (req, res) => {
  const result = await Card.create(req.body);
  res.status(201).json(result);
};

module.exports = addWord;
