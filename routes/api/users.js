const express = require('express');
const { ctrlWrapper } = require('../../helpers');

/**
 *it looks like we are creating an object of routs
 */
const router = express.Router();

const ctrl = require('../../controlers/users');
/**
 * middlewares for validate our date
 */
const { validateBody, isValidId } = require('../../middlewares');

/**
 * schema for validate data from frontend by means library Joi
 */
const { userSchemasJoi } = require('../../models/user');

router.get('/current', ctrlWrapper(ctrl));

router.post(
  '/',
  validateBody(userSchemasJoi.userAddSchema),
  ctrlWrapper(ctrl)
);

router.delete('/:id', isValidId, ctrlWrapper(ctrl));

module.exports = router;
