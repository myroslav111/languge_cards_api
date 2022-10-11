const { RequestError } = require('../../helpers');
const { unauthCard } = require('../../models/unauthCard');

const deleteWord = async (req, res) => {
  const { id } = req.params;
  const result = await unauthCard.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

module.exports = deleteWord;
