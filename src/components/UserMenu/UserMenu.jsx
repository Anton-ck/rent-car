import { useAuth } from 'components/Hooks/useAuth';
import { Container, TextWelcome, TextNickName } from './UserMenu.styled';

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <Container>
          <TextWelcome>
            Welcome, <TextNickName>{user.name}</TextNickName>
          </TextWelcome>
        </Container>
      )}
    </>
  );
};

export default UserMenu;
