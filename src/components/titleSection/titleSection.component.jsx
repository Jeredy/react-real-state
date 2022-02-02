import React from "react";
import { Container, LogoBottomLine, LogoIcon } from "./titleSection.styles";

function TitleSection() {
  return (
    <Container>
      <LogoIcon />
      <LogoBottomLine />
      <h1>Your home worth it..</h1>
      <p>
        Magna ex commodo ut ullamco reprehenderit do enim deserunt Lorem culpa
        qui enim consequat cupidatat.
      </p>
    </Container>
  );
}

export default TitleSection;
