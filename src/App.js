import React from "react";
import Dropdown from "./components/dropdown/dropdown.component";
import Hero from "./components/hero/hero.component";
import InfoSection from "./components/infoSection/infoSection.component";
import Navbar from "./components/navbar/navbar.component";
import { InfoData } from "./data/infoData";
import { SliderData } from "./data/sliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", () => {
    reveal();
    navbarReveal();
  });

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 250;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
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
      let revealPoint = 100;

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
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
