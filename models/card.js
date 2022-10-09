const { Schema, model } = require('mongoose');

const Joi = require('joi');

// const { handleSaveError } = require('../helpers');

/**
 * regular expression for checking data that goes to database if we need
 */
// const someRegex = ....

const cardSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      enum: ['en', 'de'],
      default: 'en',
    },

    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

// this foo it is middlewares for validate unique field
const handleSaveError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  next();
};

cardSchema.post('save', handleSaveError);

/** like type script typing data */
const cardAddSchema = Joi.object({
  word: Joi.string().required(),
  translation: Joi.string().required(),
  language: Joi.string(),
});

const cardSchemasJoi = {
  cardAddSchema,
};

const Card = model('card', cardSchema);

module.exports = {
  Card,
  cardSchemasJoi,
};
