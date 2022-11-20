import css from './ContactsList.module.css';

import Notification from 'components/Notification/Notification';
import ContactItem from './ContactItem';

import { useSelector } from 'react-redux';
import { selectFilter } from 'Redux/phonebook/selectors';
import { contactsApi, useGetContactsQuery } from 'services/ApiContactsSlice';
import { useEffect } from 'react';
import { store } from 'Redux/store';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContactsList = () => {
  const { data: contacts, error, isLoading, isSuccess } = useGetContactsQuery();

  useEffect(() => {
    return () => {
      store.dispatch(contactsApi.util.resetApiState());
    };
  }, []);

  const filter = useSelector(selectFilter);

  const filterContacts = array => {
    if (!filter) {
      return array;
    }

    return array.filter(arrayitem =>
      arrayitem.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts(contacts);

  if (!contacts?.length) {
    return (
      <>
        {isLoading && (
          <SkeletonTheme highlightColor="#000000">
            <Skeleton />
          </SkeletonTheme>
        )}
        <Notification text="You don't have contacts in the phone book. Please add new contacts." />
      </>
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
