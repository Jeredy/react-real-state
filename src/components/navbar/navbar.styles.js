import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: all 1s ease;

  &.active {
    background: rgba(255, 255, 255, 0.9);
    background-filter: blue(20px);
    box-shadow: 0 2px 10px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 2px 10px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 2px 10px rgba(56, 125, 255, 0.017));
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 1s ease;

  &.active {
    color: #000d1a;
  }
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  display: none;
  fill: white;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    transform: translateX(55%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
