import { useState } from "react";
import NavListMenu from "./components/NavListMenu";
import Projects from "./components/Projects";
import SpeedDialWithTextOutside from "./components/SpeedDialWithTextOutside";
import Background from "./components/Background";
import FooterWithLogo from "./components/FooterWithLogo";
import AboutUs from "./components/AboutUs";
import Media from "./components/Media";
import { CustomerReacts } from "./components/CustomerReacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" ">
      <div className=" relative z-10">
        <NavListMenu />
      </div>
      <div className=" ">
        <AboutUs />

        <Projects />
        <SpeedDialWithTextOutside />
        <Media />

        <CustomerReacts />
        <FooterWithLogo />
      </div>
      {/*  
      
      
      
     
      
<Background /> */}
    </div>
  );
}

export default App;
