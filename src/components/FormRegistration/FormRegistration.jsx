import css from '../FormLogin/FormLogin.module.css';

import Button from 'components/Button/Button';
import useAuthIsLoading from 'shared/hooks/useAuthIsLoading';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from 'Redux/auth';

const initState = {
  name: '',
  email: '',
  password: '',
};

const FormRegistration = () => {
  const [formData, setFormData] = useState(() => initState);
  const isUserLoading = useAuthIsLoading();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = formData;
    dispatch(authOperation.signup({ name, email, password }));
    setFormData(initState);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          autoComplete="off"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          title="Email must starts with 5 characters or numbers then goes an @ continuous with a range between 2 and 10 characters or numbers then . must have 'es', 'org' or 'com' or 'ru'"
          required
          placeholder="Enter email"
          autoComplete="off"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
          autoComplete="off"
          placeholder="Enter password"
          minLength={7}
        />
      </label>
      <Button type="submit" text="Register" isLoading={isUserLoading} />
    </form>
  );
};

export default FormRegistration;
