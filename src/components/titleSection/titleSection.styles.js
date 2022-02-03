import styled from "styled-components";
import { SiAltiumdesigner } from "react-icons/si";

export const Container = styled.div`
  height: ${({ logo }) => (logo ? "380px" : "200px")};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${({ logo }) => (logo ? "4rem" : "0rem")} 0rem;

  h1 {
    color: #18171c;
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 0.8rem;
  }

  p {
    text-align: center;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    max-width: 500px;
  }

  &.revealSection {
    transform: translateY(4rem);
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateY(0rem);
    transition: all 1s ease-in;
    opacity: 1;
  }
`;

export const LogoBottomLine = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 2px solid #18171c;
  background: #fff;
  width: 200px;
  margin: 1rem 0rem;
  -webkit-filter: drop-shadow(0px 4x 2px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
`;

export const LogoIcon = styled(SiAltiumdesigner)`
  font-size: 3.5rem;
  fill: #18171c;
  margin-right: 6px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
