import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';

const useAuthIsLogin = () => {
  const result = useSelector(authSelectors.selectIsLogin);
  return result;
};

export default useAuthIsLogin;
