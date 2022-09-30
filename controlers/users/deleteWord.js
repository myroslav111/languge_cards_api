const { RequestError } = require('../../helpers');
const { Card } = require('../../models/users');

const deleteWord = async (req, res) => {
  const { contactId } = req.params;
  const result = await Card.findByIdAndRemove(contactId);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

module.exports = deleteWord;
