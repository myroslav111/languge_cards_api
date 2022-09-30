const { Schema, model } = require('mongoose');

const Joi = require('joi');

/**
 * regular expression for checking data that goes to database if we need
 */
// const someRegex = ....

/**
 * create a new instance of Schema from mongoose
 */
const cardSchema = new Schema(
  {
    en: {
      type: String,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    ru: {
      type: String,
      required: true,
    },
  },
  /** */
  { versionKey: false, timestamps: true }
);

// this foo it is middlewares for validate
const handleSaveError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  next();
};
cardSchema.post('save', handleSaveError);

/** like type script typing data */
const cardAddSchema = Joi.object({
  en: Joi.string().required(),
  ru: Joi.string().required(),
});

/**
 *pass model of bd to object the first par is our name of bd second par is our shema of bd
 */
const Card = model('unauth-users', cardSchema);

const schemasJoi = {
  cardAddSchema,
};

module.exports = {
  Card,
  schemasJoi,
};
