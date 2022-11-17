import css from './ContactsList.module.css';

import Notification from 'components/Notification/Notification';
import ContactItem from './ContactItem';

import { useSelector } from 'react-redux';
import { selectFilter } from 'Redux/phonebook/selectors';
import { useGetContactsQuery } from 'services/ApiSlice';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContactsList = () => {
  const { data: contacts, error, isLoading, isSuccess } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  if (!contacts?.length) {
    return (
      <Notification text="You don't have contacts in the phone book. Please add new contacts." />
    );
  }

  if (!filteredContacts.length) {
    return (
      <Notification
        text={`${filter} - is not in your phone book. Please add new contact.`}
      />
    );
  }

  return (
    <>
      {isLoading && (
        <SkeletonTheme highlightColor="#000000">
          <Skeleton />
        </SkeletonTheme>
      )}
      {error && <Notification text={error.data} />}
      {isSuccess && (
        <ul className={css.contactsList}>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
