import React from "react";
import { sectionData } from "../../data/sectionData";
import { CardContainer, Section, Card, Image } from "./workSection.styles";

function WorkComponent() {
  return (
    <Section>
      <CardContainer>
        {sectionData.map(({ image, title, text }) => (
          <Card>
            <Image src={image} />
            <h1>{title}</h1>
            <p>{text}</p>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
}

export default WorkComponent;
