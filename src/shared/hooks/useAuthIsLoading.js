import { useSelector } from 'react-redux';
import { authSelectors } from 'Redux/auth';

const useAuthIsLoading = () => {
  const result = useSelector(authSelectors.selectIsLoading);
  return result;
};

export default useAuthIsLoading;
