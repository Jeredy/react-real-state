import React from "react";
import Dropdown from "./components/dropdown/dropdown.component";
import Hero from "./components/hero/hero.component";
import Navbar from "./components/navbar/navbar.component";
import { SliderData } from "./data/sliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen}toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
