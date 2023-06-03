import React from "react";
import Section from "./Section";
import Javascript from "./assets/stack/JavaScript-Logo.png";
import HTML from "./assets/stack/html.png";
import CSS from "./assets/stack/css.png";
import CLogo from "./assets/stack/clogo.png";
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
    CLogo,
  ];

  //todo style these with some fancy styling
  return (
    <Section title="Skills">
      {images.map((logo) => (
        <img src={logo} alt="logo" />
      ))}
    </Section>
  );
};

export default Stack;
