import { Outlet } from 'react-router-dom';
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

const SharedLayot = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Header>
            <Nav>
              <HeaderNavList>
                <HeaderNavItem>
                  <HeaderNavLink to="/">Home</HeaderNavLink>
                </HeaderNavItem>
                <HeaderNavItem>
                  <HeaderNavLink to="/catalog">Car catalog</HeaderNavLink>
                </HeaderNavItem>
                <HeaderNavItem>
                  <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
                </HeaderNavItem>
              </HeaderNavList>
            </Nav>
          </Header>
          <main>
            <Outlet />
          </main>
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayot;
