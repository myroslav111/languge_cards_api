const express = require('express');

/**
 *it looks like we are creating an object of routs
 */
const router = express.Router();

/**
 * middlewares for validate our date
 */
const { validateBody, isValidId } = require('../../middlewares');

/**
 * schema for validate data from frontend by means library Joi
 */
const { schemasJoi } = require('../../models/users');

/**
 * our functions which one is responsible for operations with data depending on the route
 */
const ctrl = require('../../controlers/users');

/** in this wrapper is try catch.  */
const { ctrlWrapper } = require('../../helpers');

router.get('/', ctrlWrapper(ctrl.getAllUsers));

router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.deleteWord));

router.post(
  '/',
  validateBody(schemasJoi.cardAddSchema),
  ctrlWrapper(ctrl.addWord)
);

module.exports = router;
