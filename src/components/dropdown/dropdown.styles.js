import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: poiter;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)``;
export const DropdownWrapper = styled.div``;
export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #18171c;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-weight: 500;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #000d1a;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
