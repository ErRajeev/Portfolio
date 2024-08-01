import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/RajeevBlack.png" alt="alt" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>hello there.!!</h2>
            <h1>it's Rajeev 😘❤️</h1>
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
