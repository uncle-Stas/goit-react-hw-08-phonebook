import css from '../LoginPage/LoginPage.module.css';

import FormRegistration from 'components/FormRegistration/FormRegistration';
import Section from 'components/Section/Section';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <Section>
      <div className={css.box}>
        <FormRegistration />
        <p className={css.text}>
          Already have an account?
          <br />
          <Link to="/">Sign in</Link>
        </p>
      </div>
    </Section>
  );
};

export default SignupPage;
