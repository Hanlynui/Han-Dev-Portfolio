import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "./Section";
import Javascript from "./assets/stack/JavaScript-Logo.png";
import HTML from "./assets/stack/html.png";
import CSS from "./assets/stack/css.png";
import Git from "./assets/stack/git.png";
import NodeExp from "./assets/stack/nodeexpress.jpeg";
import OpenAi from "./assets/stack/openai.png";
import PSQL from "./assets/stack/postgresql-logo.png";
import ReactLogo from "./assets/stack/reactlogo.png";
import Redux from "./assets/stack/redux.png";
import SQLZ from "./assets/stack/sequelize.png";
import PY from "./assets/stack/python-logo-2.png";

const Stack = () => {
  const images = [
    ReactLogo,
    Redux,
    Javascript,
    HTML,
    CSS,
    NodeExp,
    OpenAi,
    PSQL,
    SQLZ,
    Git,
    PY,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // todo scrolling bug on mobile where page can get scrolled to the right a little
  // todo maybe change the photos so dark mode looks better
  return (
    <div className="mb-10">
      <Section title="Skills 💡"> </Section>
      <Slider {...settings} className="overflow-hidden mt-[-5%]">
        {images.map((logo) => (
          <img src={logo} alt="logo" className="image" key={logo} />
        ))}
      </Slider>
    </div>
  );
};

export default Stack;
