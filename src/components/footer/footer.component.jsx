import React from "react";
import { socialMediaData } from "../../data/socialMediaData";
import {
  Content,
  FooterContainer,
  ImageBackground,
  LogoIcon,
  LogoBottomLine,
  Icon,
  SocialMediaContainer,
  IconLink,
} from "./footer.styles";

function Fotter() {
  return (
    <FooterContainer>
      <ImageBackground />
      <Content className="revealSection">
        <LogoIcon />
        <h1>A.S DESIGN</h1>

        <SocialMediaContainer>
          <LogoBottomLine />
          {socialMediaData.map(({ icon }, index) => (
            <IconLink to="/" key={index}>
              <Icon icon={icon} />
            </IconLink>
          ))}
          <LogoBottomLine />
        </SocialMediaContainer>
      </Content>
    </FooterContainer>
  );
}

export default Fotter;
