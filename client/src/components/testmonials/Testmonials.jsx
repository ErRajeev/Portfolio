import "./Testmonials.scss";

const Testmonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <>
      <div className="testmonials" id="testmonials">
        <h1>Tesemonial</h1>
        <div className="container">
          {data?.map((item) => (
            <div className={item.featured ? "featured card" : "card"}>
              <div className="top">
                <img className="left" src="assets/right-arrow.png" alt="" />
                <img className="user" src={item.img} alt="" />
                <img className="right" src={item.icon} alt="" />
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h2>{item.name}</h2>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testmonials;
