import "./Portfoliolist.scss";

const Portfoliolist = (props) => {
  const { id, title, active, setSelected } = props;
  // console.log(title);
  return (
    <>
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </>
  );
};

export default Portfoliolist;
