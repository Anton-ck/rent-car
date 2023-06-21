import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Header,
  Nav,
  HeaderNavList,
  HeaderNavItem,
  HeaderNavLink,
} from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/auth/userSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

const SharedLayot = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <Nav>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink to="/">Home</HeaderNavLink>
            </HeaderNavItem>
            {isLoggedIn && (
              <HeaderNavItem>
                <HeaderNavLink to="/phonebook">Contacts</HeaderNavLink>
              </HeaderNavItem>
            )}
          </HeaderNavList>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <HeaderNavList>
              <HeaderNavItem>
                <HeaderNavLink to="/register">Register</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink to="/login">Login</HeaderNavLink>
              </HeaderNavItem>
            </HeaderNavList>
          )}
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default SharedLayot;
