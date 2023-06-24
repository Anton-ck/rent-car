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

import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/userSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

const SharedLayot = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      {!isRefreshing && (
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
        </Container>
      )}
    </>
  );
};

export default SharedLayot;
