import Header from 'components/Header/Header';

import { Outlet } from 'react-router-dom';

const Appbar = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Appbar;
