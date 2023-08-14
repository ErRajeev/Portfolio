import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>PortFolio</h1>
        <ul>
          <li className="active">Featured</li>
          <li>WebApp</li>
          <li>Mobile App</li>
          <li>Desing</li>
          <li>Branding</li>
        </ul>
        <div className="container">
          <div className="item"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
