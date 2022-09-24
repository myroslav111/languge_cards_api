const express = require('express');

const router = express.Router();

/**
 * our functions which one is responsible for operations with data depending on the route
 */
const ctrl = require('../../controlers/users');

/** in this wrapper  I took out try catch.  */
const { ctrlWrapper } = require('../../helpers');

/** in this function I took out validation body of request */
// const { validateBody } = require('../../middlewares');

/** validation body of request */
// const schema = require('../../schema/contactSchema');

router.get('/', ctrlWrapper(ctrl.getAllUsers));

router.get('/:email', ctrlWrapper(ctrl.getUserByEmail));

router.get('/:email/:lang', ctrlWrapper(ctrl.getUserCurrentLang));

// router.post(
//   '/',
//   validateBody(schema.contactsAddSchema),
//   ctrlWrapper(ctrl.addContacts)
// );

module.exports = router;

// const contacts = require('../../models/contacts');
// router.get('/:contactId', async (req, res, next) => {
//   try {
//     console.log(req.params);
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//       throw RequestError(404, 'Not found');
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/', async (req, res, next) => {
//   try {
//     const result = await contacts.listContacts();
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });
