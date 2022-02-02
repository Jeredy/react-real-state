import styled from "styled-components";

export const Section = styled.div`
  height: 380px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-image: url("https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

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
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  z-index: 10;
  height: 250px;
  padding: 2rem;
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

  h1 {
    font-size: clamp(0.7rem, 8vw, 1.1rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.7rem;
  }

  p {
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: 80px;
  wight: 80px;
  margin-bottom: 1rem;
`;