import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 620px;
  padding-top: 1rem;
  display: flex;

  @media screen and (max-width: 760px) {
    padding-top: 0rem;
    height: 750px;
  }
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 760px) {
    max-height: 320px;
    flex-direction: column;
    padding: 1rem 0rem;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  max-height: 50vh;
  background: #18171c;
  color: #fff;
  transition: all 2s ease;

  filter: drop-shadow(
    ${({ reverse }) => (reverse ? "8px" : "-8px")} 8px 10px rgba(0, 0, 0, 0.6)
  );
  margin-top: 120px;
  z-index: 80;
  position: relative;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 6vw, 1.5rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  &.reveal {
    transform: translateX(${({ reverse }) => (reverse ? "-500px" : "500px")});
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateX(
      calc(${({ reverse }) => (reverse ? "100% - 55%" : "10%")})
    );
    opacity: 1;
  }

  @media screen and (max-width: 760px) {
    width: 85vw;
    height: 500px;
    margin-top: 0px;
    order: 1;

    &.reveal {
      transform: translateX(${({ reverse }) => (reverse ? "-200px" : "200px")});
      position: relative;
      opacity: 0;
    }

    &.active {
      transform: translateX(calc(${({ reverse }) => (reverse ? "8%" : "10%")}));
      transition: all 2s ease;
      opacity: 1;
    }
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  max-height: 400px;
  justify-content: center;
  max-width: 650px;
  align-items: center;
  z-index: 22;
  transition: all 2s ease;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  &.reveal {
    transform: translateX(${({ reverse }) => (reverse ? "500px" : "-500px")});
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateX(calc(${({ reverse }) => (reverse ? "10%" : "25%")}));
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 85vw;
      height: 100%;
      padding: 0rem;
    }
  }

  @media screen and (max-width: 760px) {
    width: 85vw;
    margin-top: 0px;
    order: 2;

    &.reveal {
      transform: translateX(${({ reverse }) => (reverse ? "-200px" : "200px")});
      position: relative;
      opacity: 0;
    }

    &.active {
      transform: translateX(calc(${({ reverse }) => (reverse ? "9%" : "10%")}));
      transition: all 2s ease;
      opacity: 1;
    }
  }
`;
