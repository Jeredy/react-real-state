import styled, { css } from "styled-components/macro";
import { SiArlo } from "react-icons/si";
import { Link } from "react-router-dom";

const ContentSize = css`
  height: 65vh;
  width: 100%;

  @media screen and (max-width: 760px) {
    height: 80vh;
  }
`;

export const FooterContainer = styled.div`
  ${ContentSize}
  display: flex;
  align-items: flex-start;
  justify-content: center;
  postion: relative;
  margin-top: 5rem;

  @media screen and (max-width: 760px) {
    margin-top: 0rem;
    align-items: center;
  }
`;

export const ImageBackground = styled.div`
  ${ContentSize}
  display: flex;
  position: absolute;
  z-index: 11;

  background-image: url("images/footer-md.jpeg");
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

    @media screen and (max-width: 760px) {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.6) 20%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }

  @media screen and (max-width: 760px) {
    margin-top: 15rem;
    background-image: url("images/footer-ss.jpeg");
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 999;

  &.revealSection {
    transform: translateY(5rem);
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateY(0rem);
    transition: all 1.5s ease-in;
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

  @media screen and (max-width: 480px) {
    width: 50px;
  }
`;

export const LogoIcon = styled(SiArlo)`
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
  padding: 0rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(({ icon }) => icon)`
  width: 1rem;
  height: 1rem;
  background: red;
  display: block;
`;

export const IconLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;
