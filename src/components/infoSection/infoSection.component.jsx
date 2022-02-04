import React from "react";
import { Button } from "../button/button.styles";
import {
  ColumnLeft,
  ColumnRight,
  Container,
  Section,
} from "./infoSection.styles";

function InfoSection({
  heading,
  paragraphOne,
  reverse,
  buttonLabel,
  image,
}) {
  return (
    <Section>
      <Container>
        <ColumnLeft className="reveal" reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <Button to="/homes">
            {buttonLabel.toUpperCase()}
          </Button>
        </ColumnLeft>
        <ColumnRight className="reveal" reverse={reverse}>
          <img src={window.innerWidth > 480 ? image.md : image.ss} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default InfoSection;
