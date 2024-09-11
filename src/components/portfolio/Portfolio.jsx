import { useEffect, useState } from "react";
import "./Portfolio.scss";
import Portfoliolist from "./portfoliolist/Portfoliolist";
import {
  frontendPortfolio,
  backendPortfolio,
  programmingPortfolio,
  toolsPortfolio,
  projectsPortfolio,
} from "./PortfolioData";

const Portfolio = () => {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "tools",
      title: "Tools & Tech",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];

  const loadData = () => {
    switch (selected) {
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "programming":
        setData(programmingPortfolio);
        break;
      case "tools":
        setData(toolsPortfolio);
        break;
      case "projects":
        setData(projectsPortfolio);
        break;

      default:
        setData(frontendPortfolio);
        break;
    }
  };

  useEffect(() => {
    loadData();
  }, [selected]);

  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list?.map((item) => (
            <Portfoliolist
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="container">
          {data?.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt="alt" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
