import React from "react";
import Section from "./Section";
import fidgetSpinnerWeb from "./assets/3dfidgetweb.png";
import homePageRITH from "./assets/homepageRITH.png";

const Projects = () => {
  const projects = [
    {
      image: homePageRITH,
      title: "RITH Trading",
      id: 1,
      github:
        "https://github.com/CapstoneGroupThree/Robin-In-the-Hood-Trading-Corp-1",
      site: "https://rith-trading.onrender.com/",
    },
    {
      image: fidgetSpinnerWeb,
      title: "3d Fidget Spinner App",
      id: 2,
      github: "https://github.com/Hanlynui/Stress-Relief-Ultra",
      site: "https://3d-fidget-spinner.com/",
    },
  ];

  return (
    <Section title="Projects 💻" subtitle="Here are some of my projects">
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl duration-300 ease-in-out hover:scale-110 overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3"></img>
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
