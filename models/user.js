const { Schema, model } = require('mongoose');

const Joi = require('joi');

const { handleSaveError } = require('../helpers');

/**
 * regular expression for checking data that goes to database if we need
 */
// const someRegex = ....

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      required: true,
    },

    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);


userSchema.post('save', handleSaveError);


/** like type script typing data */
const userAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    profilePic: Joi.string(),
});


const userSchemasJoi = {
  userAddSchema,
};


const User = model('user', userSchema);


module.exports = {
    User,
    userSchemasJoi,
};