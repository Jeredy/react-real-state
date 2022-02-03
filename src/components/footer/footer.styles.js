import styled, { css } from "styled-components/macro";
import { SiAltiumdesigner } from "react-icons/si";

const ContentSize = css`
  height: 70vh;
  width: 100%;
`;

export const FooterContainer = styled.div`
  ${ContentSize}
  display: flex;
  align-items: flex-start;
  justify-content: center;
  postion: relative;
  padding-top: 2rem;
`;

export const ImageBackground = styled.div`
  ${ContentSize}
  display: flex;
  position: absolute;
  z-index: 11;

  background-image: url("https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    ${ContentSize}

    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 22;

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

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const LogoBottomLine = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 2px solid #18171c;
  background: #fff;
  width: 75px;
  margin: 1rem 0rem;
`;

export const LogoIcon = styled(SiAltiumdesigner)`
  font-size: 3.5rem;
  fill: #18171c;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;

export const Icon = styled(({ icon }) => icon)`
  font-size: 3.5rem;
`;
