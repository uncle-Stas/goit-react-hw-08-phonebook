import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://636cf5b2ab4814f2b273e18c.mockapi.io/api/contactsbook',
});

export const getContacts = async () => {
  const response = await instanceContacts.get('/');
  return response.data;
};

export const addContact = async contact => {
  const response = await instanceContacts.post('/', contact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await instanceContacts.delete(`/${id}`);
  return response.data;
};
