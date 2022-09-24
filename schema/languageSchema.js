const Joi = require('joi');

/** like type script typing data */
const languageSchema = Joi.object({
  en: Joi.string().required(),
  de: Joi.string().required(),
  // id: Joi.string().required(),
});

module.exports = {
  languageSchema,
};
