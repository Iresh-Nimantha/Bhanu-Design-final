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
    <div>
      <NavListMenu />
      <SpeedDialWithTextOutside />
      <AboutUs />

      <Projects />
      <Media />

      <CustomerReacts />
      <FooterWithLogo />
      {/*  
      
      
      
     
      
<Background /> */}
    </div>
  );
}

export default App;
