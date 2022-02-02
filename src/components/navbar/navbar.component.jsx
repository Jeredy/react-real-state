import React from "react";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
  LogoIcon,
} from "./navbar.styles";
import { Button } from "../button/button.styles";

import { menuData } from "../../data/menuData";

function Navbar({ toggle }) {
  return (
    <Nav className="navbarReveal">
      <Logo to="/" className="navbarReveal">
        <LogoIcon className="navbarReveal" />
         A.S DESIGN
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} className="navbarReveal">
            {item.title.toUpperCase()}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contact">
          CONTACT US
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
