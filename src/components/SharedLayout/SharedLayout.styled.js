import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  /* margin-left: 80px; */
  padding: 0 15px 0 15px;
  width: 1200px;

  /* @media screen and (min-width: 768px) {
    width: 768px;
  } */
  outline: 1px solid red;
`;

export const Header = styled.header`
  padding: 0 25px 0 5px;
  min-height: 60px;
  margin-bottom: 15px;
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

