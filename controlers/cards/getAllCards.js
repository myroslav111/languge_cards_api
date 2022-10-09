const { Card } = require('../../models/card');

const getAllCards = async (_, res) => {
  const result = await Card.find();
  res.json(result);
};

module.exports = getAllCards;
