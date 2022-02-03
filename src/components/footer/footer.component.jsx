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
          {socialMediaData.map((item) => (
            <Icon icon={item.icon} />
          ))}
          <LogoBottomLine />
        </SocialMediaContainer>
      </Content>
    </FooterContainer>
  );
}

export default Fotter;
