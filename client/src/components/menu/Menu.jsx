import React from "react";
import "./Menu.scss";
const Menu = (props) => {
  const { menuopen, setMenuopen } = props;
  return (
    <>
      <div className={"menu " + (menuopen && "active")}>
        <ul>
          <li onClick={() => setMenuopen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <a href="#works">Works</a>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <a href="#testmonials">Testmonial</a>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
