const { isValidObjectId } = require('mongoose');

const { RequestError } = require('../helpers');

/**
 *native mongoose foo
 */
const isValidId = (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const result = isValidObjectId(id);
  if (!result) {
    next(RequestError(404, `${id} is not valid id `));
  }
  next();
};

module.exports = isValidId;
