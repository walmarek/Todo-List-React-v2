import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const NavBar = styled.nav`
  border-bottom: 2px solid black;
  box-shadow: 1px 1px 6px #1d1c1c;
  background: teal;
  width: 100%;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const NavList = styled.ul`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  list-style: none;

  @media (max-width: 425px) {
    display: inline;
  }
`;

export const NavItem = styled.li`
 margin-left: 20px;
 margin-right: 20px;

 @media (max-width: 425px) {
  margin: 4px;
  }
`;

export const Img = styled.img`
grid-area: 1 / 1 / 2 / 2;
  width: 44px;
  height: 44px;
  margin-left: 30px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: white;
  font-size: 20px;
  text-decoration: none;
 
  &:hover {
    color: #dddddd;
  }

  &:active {
    color: white;
  }

  &.${activeClassName} {
    color: white;
    font-weight: 700;
    font-size: 22px;

    &:hover {
      color: #dddddd;
    }

    &:active {
      color: white;
    }
  }
`;
