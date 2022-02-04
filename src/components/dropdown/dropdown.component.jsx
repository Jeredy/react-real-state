import React from "react";
import { menuData } from "../../data/menuData";
import { Button } from "../button/button.styles";
import {
  BtnWrap,
  CloseIcon,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownWrapper,
  Icon,
} from "./dropdown.styles";

function Dropdown({ isOpen, toggle }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title.toUpperCase()}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
