import { Navigate, Outlet } from 'react-router-dom';
import useAuthIsLogin from 'shared/hooks/useAuthIsLogin';

const PublicRoute = () => {
  const isLogin = useAuthIsLogin();

  if (isLogin) {
    return <Navigate to="phonebook" />;
  }

  return <Outlet />;
};

export default PublicRoute;
