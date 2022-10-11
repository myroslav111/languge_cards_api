const express = require('express');
const { ctrlWrapper } = require('../../helpers');

/**
 *it looks like we are creating an object of routs
 */
const router = express.Router();

const ctrl = require('../../controllers/users');
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
  '/register',
  validateBody(userSchemasJoi.userRegisterSchema),
  ctrlWrapper(ctrl.registerUser)
);


router.post(
  '/login',
  validateBody(userSchemasJoi.userLoginSchema),
  ctrlWrapper(ctrl.loginUser)
);

router.delete('/:id', isValidId, ctrlWrapper(ctrl));

module.exports = router;
