import React from "react";
import { Container, LogoBottomLine, LogoIcon } from "./titleSection.styles";

function TitleSection({ logo, title, paragraph }) {
  return (
    <Container className="revealSection" logo={logo}>
      {logo && (
        <>
          <LogoIcon />
          <LogoBottomLine />
        </>
      )}
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </Container>
  );
}

export default TitleSection;
