import css from './Header.module.css';

import NavbarUser from 'components/NavbarUser/NavbarUser';

import { MdContactPhone } from 'react-icons/md';
import useAuthIsLogin from 'shared/hooks/useAuthIsLogin';

const Header = () => {
  const isUserLogin = useAuthIsLogin();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook
          <MdContactPhone style={{ marginLeft: '10px' }} />
        </h1>
        {isUserLogin && <NavbarUser />}
      </div>
    </header>
  );
};

export default Header;
