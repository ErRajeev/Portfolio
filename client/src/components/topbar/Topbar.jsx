import "./Topbar.scss";
import { Mail, GitHub } from "@material-ui/icons";

const Topbar = (props) => {
  const { menuopen, setMenuopen } = props;
  return (
    <>
      <div className={"topbar " + (menuopen && "active")} id="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              Rajeev.
            </a>
            <div className="itemcontainer">
              <GitHub className="icon" />
              <span>github.com/ErRajeev</span>
            </div>
            <div className="itemcontainer">
              <Mail className="icon" />
              <span>er.rajeev.mca@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div
              className="hamburger"
              onClick={() => {
                setMenuopen(!menuopen);
              }}
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
