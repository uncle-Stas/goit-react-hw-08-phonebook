import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const id = nanoid();

    this.props.onSubmit({ name, number, id });
    this.setState({
      name: '',
      number: '',
    });
    event.target.reset();
  };

  render() {
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.inputLabel}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              placeholder="Enter name"
              autoComplete="off"
              minLength={3}
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
              onChange={this.handleChange}
              placeholder="Enter phone number"
              autoComplete="off"
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

// --------------------------- PropTypes ----------------------

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
