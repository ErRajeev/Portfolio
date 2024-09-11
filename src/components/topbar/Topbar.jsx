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

            <a
              href="mailto:iam.rajeev.dev@gmail.com?subject=Me&body=Hello!"
              style={{ textDecoration: "none" }}
            >
              <div className="itemcontainer">
                <Mail className="icon" />
                <span>iam.rajeev.dev@gmail.com</span>
              </div>
            </a>
            <a
              href="https://github.com/ErRajeev"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              <div className="itemcontainer">
                <GitHub className="icon" />
                <span>github.com/ErRajeev</span>
              </div>
            </a>
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
