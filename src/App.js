import React from "react";
import Dropdown from "./components/dropdown/dropdown.component";
import Footer from "./components/footer/footer.component";
import Hero from "./components/hero/hero.component";
import InfoSection from "./components/infoSection/infoSection.component";
import Navbar from "./components/navbar/navbar.component";
import TitleSection from "./components/titleSection/titleSection.component";
import WorkComponent from "./components/workSection/workSection.component";
import { InfoData, InfoDataTwo } from "./data/infoData";
import { SliderData } from "./data/sliderData";
import { titleDataOne, titleDataTwo } from "./data/titleData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", () => {
    reveal(".reveal", window.innerWidth > 480 ? 80 : 0);
    reveal(".revealSection", window.innerWidth > 480 ? 20 : 180);
    navbarReveal();
  });

  function reveal(classe, revealPoint) {
    let reveals = document.querySelectorAll(classe);
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function navbarReveal() {
    let navbarReveal = document.querySelectorAll(".navbarReveal");
    let heroReveal = document.querySelector(".heroContent");

    for (let i = 0; i < navbarReveal.length; i++) {
      let windowHeight = window.innerHeight / 2;
      let revealTop = heroReveal.getBoundingClientRect().bottom;
      let revealPoint = 10;

      if (revealTop < windowHeight - revealPoint) {
        navbarReveal[i].classList.add("active");
      } else {
        navbarReveal[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <TitleSection logo={true} {...titleDataOne} />
      <WorkComponent />
      <TitleSection {...titleDataTwo} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Footer />
    </>
  );
}

export default App;
