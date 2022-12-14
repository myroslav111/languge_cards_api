const { Schema, model } = require('mongoose');

const Joi = require('joi');

const { handleSaveError } = require('../helpers');

/**
 * create a new instance of Schema from mongoose
 */
const unauthCardSchema = new Schema(
  {
    word: {
      type: String,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    translation: {
      type: String,
      required: true,
    },
  },
  /** */
  { versionKey: false, timestamps: true }
);

unauthCardSchema.post('save', handleSaveError);

/** like type script typing data */
const unauthCardAddSchema = Joi.object({
  word: Joi.string().required(),
  translation: Joi.string().required(),
});

/**
 *pass model of bd to object the first par is our name of bd second par is our shema of bd
 */
const unauthCard = model('unauth-cards', unauthCardSchema);

const schemasJoi = {
  unauthCardAddSchema,
};

module.exports = {
  unauthCard,
  schemasJoi,
};
