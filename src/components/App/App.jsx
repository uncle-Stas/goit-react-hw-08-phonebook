import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    prev => {
      if (prev !== contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const addContact = newContact => {
    let nameRepeat = 0;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        nameRepeat = 1;
        break;
      }
    }

    nameRepeat
      ? Notify.failure(`${newContact.name}, is alredy in contacts`, {
          position: 'center-top',
          timeout: 5000,
        })
      : setContacts(prev => [...prev, newContact]);
  };

  const handleChangeFilter = event => {
    const { value } = event.target;

    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  const checkContacts = contacts.length;
  const filteredContacts = filterContacts();

  return (
    <>
      <Section>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section>
        <>
          <ContactsFilter onChangeFilter={handleChangeFilter} filter={filter} />
          {checkContacts ? (
            <ContactsList
              contacts={filteredContacts}
              deleteContact={deleteContact}
              searchContact={filter}
            />
          ) : (
            <Notification text="You don't have contacts in the phone book. Please add new contacts." />
          )}
        </>
      </Section>
    </>
  );
}

export default App;
