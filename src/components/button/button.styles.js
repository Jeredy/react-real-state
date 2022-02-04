import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (!!primary ? "#17181c" : "#fff")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "10px 30px" : "10px 20px")};
  color: ${({ primary }) => (!!primary ? "#fff" : "#17181c")}; //357b70
  font-size: ${({ big }) => (big ? "1.1rem" : "1rem")};
  font-weight: 400;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: translateY(-2px);
  }
`;
