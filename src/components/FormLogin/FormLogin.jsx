import css from './FormLogin.module.css';

import Button from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from 'Redux/auth';
import useAuthIsLoading from 'shared/hooks/useAuthIsLoading';

const initState = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const [formData, setFormData] = useState(() => initState);
  const isUserLoading = useAuthIsLoading();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = formData;
    dispatch(authOperation.login({ email, password }));
    setFormData(initState);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          title="example mail@mail.com"
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
      <Button type="submit" text="Login" isLoading={isUserLoading} />
    </form>
  );
};

export default FormLogin;
