const { Card } = require('../../models/card');

const addCard = async (req, res) => {
  const result = await Card.create(req.body);
  res.status(201).json(result);
};

module.exports = addCard;
