import css from './NavbarUser.module.css';

import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authOperation, authSelectors } from 'Redux/auth';
import useAuthIsLoading from 'shared/hooks/useAuthIsLoading';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const isLoading = useAuthIsLoading();
  const userName = useSelector(authSelectors.selectUserName);

  const handleLogout = () => {
    dispatch(authOperation.logout());
  };

  return (
    <div>
      <span className={css.user}>
        Welcome, <b>{userName}</b>
      </span>
      <Button
        type="button"
        text="LogOut"
        onClick={handleLogout}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NavbarUser;
