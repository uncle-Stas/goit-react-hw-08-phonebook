import css from './Header.module.css';

import { Link } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook
          <MdContactPhone style={{ marginLeft: '10px' }} />
        </h1>
        <nav>
          <Link className={css.link} to="/">
            signUp
          </Link>
          <Link className={css.link} to="/signin">
            signIn
          </Link>
          <Link className={css.link} to="/phonebook">
            phonebook
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
