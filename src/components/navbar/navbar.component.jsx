import React from "react";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from "./navbar.styles";
import { Button } from "../button/button.styles";

import { menuData } from "../../data/menuData";

function Navbar({ toggle }) {
  return (
    <Nav className="navbarReveal">
      <Logo to="/" className="navbarReveal">
        ELIXIR
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} className="navbarReveal">
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
