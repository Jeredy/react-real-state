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
  paragraphTwo,
  reverse,
  buttonLabel,
  image,
}) {
  return (
    <Section>
      <Container>
        <ColumnLeft className="reveal">
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default InfoSection;
