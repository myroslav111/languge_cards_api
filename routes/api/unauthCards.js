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
const { schemasJoi } = require('../../models/unauthCard');

/**
 * our functions which one is responsible for operations with data depending on the route
 */
const ctrl = require('../../controlers/unauthCards');

/** in this wrapper is try catch.  */
const { ctrlWrapper } = require('../../helpers');

router.get('/', ctrlWrapper(ctrl.getAllUnauthCards));


router.delete('/:id', isValidId, ctrlWrapper(ctrl.deleteCard));

router.post(
  '/',
  validateBody(schemasJoi.unauthCardAddSchema),
  ctrlWrapper(ctrl.addCard)
);

module.exports = router;
