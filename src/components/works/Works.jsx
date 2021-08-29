import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "E-commerce App",
      desc: "Technologies: Javascript, Sass",
      img: "assets/ecommerceApp.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Blog App",
      desc: "Technologies: Node.js, Express, MongooseDB",
      img: "assets/blogApp.png",
    },
    {
      id: "3",
      icon: "./assets/globe.jpg",
      title: "Weather App",
      desc: "Technologies: Javascript, CSS, API weather, Moment.js",
      img: "assets/weatherApp.jpg",
    },
    {
      id: "4",
      icon: "./assets/mobile.png",
      title: "AimForThat",
      desc: "Technologies: Swift, Story Boards",
      img: "assets/aimForThat.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
