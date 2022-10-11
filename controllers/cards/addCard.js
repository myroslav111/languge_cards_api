const { Card } = require('../../models/card');

const addCard = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Card.create({...req.body, owner});
  res.status(201).json(result);
};

module.exports = addCard;
