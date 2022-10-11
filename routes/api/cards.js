const express = require('express');
const { ctrlWrapper } = require('../../helpers');

/**
 *it looks like we are creating an object of routs
 */
const router = express.Router();

const ctrl = require('../../controllers/cards');
/**
 * middlewares for validate our date
 */
const { authenticate, validateBody, isValidId } = require('../../middlewares');

/**
 * schema for validate data from frontend by means library Joi
 */
const { cardSchemasJoi } = require('../../models/card');

router.get('/', authenticate, ctrlWrapper(ctrl.getAllCards));

router.post(
  '/', 
  authenticate,
  validateBody(cardSchemasJoi.cardAddSchema),
  ctrlWrapper(ctrl.addCard)
);

router.delete('/:id', authenticate, isValidId, ctrlWrapper(ctrl.deleteCard));

module.exports = router;
