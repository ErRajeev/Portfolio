import { useEffect, useRef } from "react";
import { init } from "ityped";

import "./Intro.scss";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Freelancer"],
    });
  }, []);
  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/RajeevWhite.png" alt="alt" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>hello there.!!</h2>
            <h1>it's Rajeev Ranjan</h1>
            <h3>
              Freelancer
              <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="alt" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Intro;
