import { Component } from 'react';
import { Notify } from 'notiflix';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

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
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  handleChangeFilter = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  filterContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  }

  deleteContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );

      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const checkContacts = contacts.length;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <Section>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section>
          <>
            <ContactsFilter onChangeFilter={this.handleChangeFilter} />
            {checkContacts ? (
              <ContactsList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
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
}

export default App;
