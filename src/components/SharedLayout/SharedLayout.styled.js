import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { sizes } from 'styles/sharedStyles';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 0 25px 0 5px;
  height: ${sizes.header.height};
  margin: 0 auto;
  max-width: ${sizes.container.width};
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const HeaderNavList = styled.ul`
  display: flex;
  padding: 20px 0 20px 0;
  gap: 20px;
`;

export const HeaderNavItem = styled.li``;
export const HeaderNavLink = styled(NavLink)`
  padding: 18px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  position: relative;

  &.active {
    color: orangered;
    &::after {
      display: inline-block;
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      border-radius: 2px;
      background-color: tomato;
    }
  }
`;
