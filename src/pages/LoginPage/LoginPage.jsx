import css from './LoginPage.module.css';

import { Link } from 'react-router-dom';
import FormLogin from 'components/FormLogin/FormLogin';
import Section from 'components/Section/Section';

const LoginPage = () => {
  return (
    <Section>
      <div className={css.box}>
        <FormLogin />
        <p className={css.text}>
          Don't have an account?
          <br />
          <Link to="signup">Create account</Link>
        </p>
      </div>
    </Section>
  );
};

export default LoginPage;
