import {
  Container,
  TextWelcome,
  TextNickName,
  ExitButton,
} from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operationsWithUser';
import { selectIsLoggedIn, selectUser } from 'redux/auth/userSelectors';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn && (
        <Container>
          <TextWelcome>
            Welcome, <TextNickName>{user.name}</TextNickName>
          </TextWelcome>

          <ExitButton
            onClick={() => {
              dispatch(logoutUser());
            }}
            variant="contained"
            size="large"
            startIcon={<LogoutIcon />}
          >
            LogOut
          </ExitButton>
        </Container>
      )}
    </>
  );
};

export default UserMenu;
