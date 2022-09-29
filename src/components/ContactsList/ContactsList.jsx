import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import ContactItem from './ContactItem';

const ContactsList = ({ contacts, deleteContact, searchContact }) => {
  const checkFilteredContacts = contacts.length;

  return (
    <>
      {checkFilteredContacts ? (
        <ul className={css.contactsList}>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      ) : (
        <Notification
          text="is not in your phone book. Please add new contact."
          italicText={searchContact}
        />
      )}
    </>
  );
};

export default ContactsList;

// --------------------------- PropTypes ----------------------

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.string.isRequired,
};
