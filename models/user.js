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
      // required: true,
    },

    token: {
    type: String,
    default: null,
  },
  },
  { versionKey: false, timestamps: true }
);


userSchema.post('save', handleSaveError);


/** like type script typing data */
const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    profilePic: Joi.string(),
});

const userLoginSchema = Joi.object({
    email: Joi.string().required(),
});


const userSchemasJoi = {
  userRegisterSchema,
  userLoginSchema,
};


const User = model('user', userSchema);


module.exports = {
    User,
    userSchemasJoi,
};