import css from './ContactForm.module.css';

import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'Redux/selectors';
import { addContact } from 'Redux/contactsOperations';

const initialLocalState = {
  name: '',
  phone: '',
};

function ContactForm() {
  const [localState, setLocalState] = useState(initialLocalState);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    setLocalState(prev => ({ ...prev, [name]: value }));
  };

  const checkRepeatName = name => {
    let nameRepeat = 1;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        nameRepeat = 0;
        break;
      }
    }

    return nameRepeat;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, phone } = localState;

    checkRepeatName(name)
      ? dispatch(addContact({ name, phone })) &&
        setLocalState(initialLocalState) &&
        event.target.reset()
      : Notify.failure(`${name}, is alredy in contacts`, {
          position: 'center-top',
          timeout: 5000,
        });
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.inputLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            placeholder="Enter name"
            autoComplete="off"
            minLength={3}
            value={localState.name}
          />
        </label>
        <label className={css.inputLabel}>
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            placeholder="Enter phone number"
            autoComplete="off"
            value={localState.phone}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
