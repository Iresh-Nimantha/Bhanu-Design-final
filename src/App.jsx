import { useState } from "react";
import NavListMenu from "./components/NavListMenu";
import Projects from "./components/Services/Projects";
import SpeedDialWithTextOutside from "./components/SpeedDialWithTextOutside";

import FooterWithLogo from "./components/FooterWithLogo";
import AboutUs from "./components/AboutUs";
import Media from "./components/Media";
import Vacancies from "./components/Vacancies ";
import { CustomerReacts } from "./components/CustomerReacts";
import Vediome from "./components/Vediome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" ">
      <div className=" relative z-10">
        <NavListMenu />
      </div>
      <div className=" ">
        <AboutUs />
        <Vediome />
        <Projects />
        <SpeedDialWithTextOutside />
        <Media />

        <CustomerReacts />
        <Vacancies />
        <FooterWithLogo />
      </div>
      {/*  
      
      
      
     
      
<Background /> */}
    </div>
  );
}

export default App;
