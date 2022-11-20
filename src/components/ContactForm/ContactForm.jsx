import css from './ContactForm.module.css';

import { Notify } from 'notiflix';
import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/ApiContactsSlice';
import { useEffect } from 'react';
import Button from 'components/Button/Button';

Notify.init({
  position: 'center-top',
});

const initialLocalState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [localState, setLocalState] = useState(initialLocalState);
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading, isSuccess, isError }] =
    useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;

    setLocalState(prev => ({ ...prev, [name]: value }));
  };

  const repeatName = nameQ => {
    let nameRepeat = 0;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === nameQ.toLowerCase()) {
        nameRepeat = 1;
        break;
      }
    }

    return nameRepeat;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = localState;

    if (repeatName(name)) {
      return Notify.failure(`${name}, is alredy in contacts`);
    }

    addContact({ name, number });
    event.target.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success(`${localState.name}, added to phonebook`);
      setLocalState(initialLocalState);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Notify.failure('Oops, something went wrong...');
    }
  }, [isError]);

  return (
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
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="Enter phone number"
          autoComplete="off"
          value={localState.phone}
        />
      </label>
      <Button type="submit" text="add contact" isLoading={isLoading} />
    </form>
  );
};

export default ContactForm;
