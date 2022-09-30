const { RequestError } = require('../helpers');

/**
 * this foo checks data (req.body) from frontend . The function takes as a parameter joi schema from model in routs file
 */
const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
