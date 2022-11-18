// import Footer from 'Components/Footer/Footer';
import Header from 'components/Header/Header';

// import { Suspense } from 'react';
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
