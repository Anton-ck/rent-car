import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/userSelectors';
import { selectIsLoggedIn } from 'redux/auth/userSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    // isRefreshing,
    user,
  };
};
