import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  max-height: 90vh;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
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
      calc(${({ reverse }) => (reverse ? "100% - 55%" : "90% - 100%")})
    );
    transition: all 2s ease;
    opacity: 1;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  max-height: 400px;
  justify-content: center;
  align-items: center;
  z-index: 22;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  &.reveal {
    transform: translateX(${({ reverse }) => (reverse ? "500px" : "-500px")});
    position: relative;
    opacity: 0;
  }

  &.active {
    transform: translateX(
      calc(${({ reverse }) => (reverse ? "80% - 100%" : "100% - 80%")})
    );
    transition: all 2s ease;
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
