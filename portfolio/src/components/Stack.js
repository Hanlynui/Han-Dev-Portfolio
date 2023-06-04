import React, { useRef, useState } from "react";
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
import { useSwipeable } from "react-swipeable";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - imageTrackRef.current.offsetLeft);
    setScrollLeft(imageTrackRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageTrackRef.current.offsetLeft;
    const moveX = x - startX;
    imageTrackRef.current.scrollLeft = scrollLeft - moveX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const imageTrackRef = useRef(null);

  const handleSwipedLeft = () => {
    // Scroll the images to the right
    imageTrackRef.current.scrollLeft += imageTrackRef.current.offsetWidth;
  };

  const handleSwipedRight = () => {
    // Scroll the images to the left
    imageTrackRef.current.scrollLeft -= imageTrackRef.current.offsetWidth;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  //todo style these with some fancy styling
  return (
    <Section title="Skills 💡">
      <div
        className="imageBody"
        {...swipeHandlers}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="imageTrack" ref={imageTrackRef}>
          {images.map((logo) => (
            <img src={logo} alt="logo" className="image" key={logo} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Stack;
