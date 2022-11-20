import { Navigate, Outlet } from 'react-router-dom';
import useAuthIsLogin from 'shared/hooks/useAuthIsLogin';

const PrivatRoute = () => {
  const isLogin = useAuthIsLogin();

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivatRoute;
