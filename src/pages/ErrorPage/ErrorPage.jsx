import { Link } from 'react-router-dom';

import Section from 'components/Section/Section';

const ErrorPage = () => {
  return (
    <main>
      <Section>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '50px' }}>404 PAGE NOT FOUND</h1>
          <h3>
            Oops! The page you are looking for does not exist. Check that you
            typed the address correctly.
          </h3>
          <Link to={'/'} style={{ fontSize: '20px' }}>
            Home page
          </Link>
        </div>
      </Section>
    </main>
  );
};

export default ErrorPage;
