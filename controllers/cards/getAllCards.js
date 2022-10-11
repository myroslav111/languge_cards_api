const { Card } = require('../../models/card');

const getAllCards = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Card.find({owner}).populate("owner", "name email");
  res.json(result);
};

module.exports = getAllCards;
