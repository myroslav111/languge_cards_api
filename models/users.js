const fs = require('fs/promises');

const path = require('path');

const { nanoid } = require('nanoid');

/** build path to our data */
const pathContacts = path.resolve('models/users.json');

// pathContacts
const listOfUsers = async () => {
  const data = await fs.readFile(pathContacts, 'utf8');
  return JSON.parse(data);
};

const getUserByEmail = async email => {
  const users = await listOfUsers();
  const user = users.find(user => user.email === email);
  return user || null;
};

const getUserLang = async (email, lang) => {
  const user = await getUserByEmail(email);
  return lang === 'en' ? user.data : user.dataDe;
};

const getContactById = async contactId => {
  const data = await fs.readFile(pathContacts, 'utf-8');
  const contacts = JSON.parse(data);
  const contact = contacts.find(el => el.id === contactId);
  if (!contact) return null;
  return contact;
};

const removeContact = async contactId => {
  const contacts = await listOfUsers();
  const indexOfContact = contacts.findIndex(
    contact => contact.id === contactId
  );
  if (indexOfContact === -1) return null;
  const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  await fs.writeFile(pathContacts, JSON.stringify(updatedContacts), 'utf8');
  return contacts[indexOfContact];
};

const addContact = async body => {
  const { name, email, phone } = body;
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const contacts = await listOfUsers();
  const updatedContacts = JSON.stringify([...contacts, newContact]);
  await fs.writeFile(pathContacts, updatedContacts, 'utf8');
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listOfUsers();

  const id = contactId.toString();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index === -1) return null;
  contacts[index] = { id, ...body };
  await fs.writeFile(pathContacts, JSON.stringify(contacts), 'utf8');
  return contacts[index];
};

module.exports = {
  listOfUsers,
  getUserByEmail,
  getUserLang,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
