const express = require('express');
const { ctrlWrapper } = require('../../helpers');

/**
 *it looks like we are creating an object of routs
 */
const router = express.Router();

const ctrl = require('../../controlers/cards');
/**
 * middlewares for validate our date
 */
const { validateBody, isValidId } = require('../../middlewares');

/**
 * schema for validate data from frontend by means library Joi
 */
const { cardSchemasJoi } = require('../../models/card');

router.get('/', ctrlWrapper(ctrl.getAllCards));

router.post(
  '/',
  validateBody(cardSchemasJoi.cardAddSchema),
  ctrlWrapper(ctrl.addCard)
);

router.delete('/:id', isValidId, ctrlWrapper(ctrl.deleteCard));

module.exports = router;
