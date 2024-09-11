import { useState } from "react";
import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testmonials/Testmonials";
import Contact from "./components/contacts/Contact";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuopen, setMenuopen] = useState(false);

  return (
    <>
      <div className="app">
        <Menu menuopen={menuopen} setMenuopen={setMenuopen} />
        <Topbar menuopen={menuopen} setMenuopen={setMenuopen} />
        <div className="section">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
