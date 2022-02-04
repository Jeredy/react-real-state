import styled from "styled-components";

export const Section = styled.div`
  height: 380px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
  margin-bottom: 3rem;
  background-image: url("images/work-section.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.6;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  @media screen and (max-width: 480px) {
    height: 150vh;
    background-image: src("images/plant.png");
    background-size: cover;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  z-index: 10;
  height: 280px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-filter: drop-shadow(0 1px 8px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  margin: 1rem;
  max-width: 250px;

  &.revealSection {
    transform: translateY(6rem);
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateY(0rem);
    transition: all 2s ease;
    opacity: 1;
  }

  h1 {
    font-size: clamp(0.7rem, 8vw, 1.1rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
    margin-bottom: 0.7rem;
  }

  p {
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 480px) {
    height: 250px;
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 50px;
  wight: 50px;
  margin-bottom: 1rem;
`;
