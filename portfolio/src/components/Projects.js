import React from "react";
import Section from "./Section";
import fidgetSpinnerWeb from "./assets/3dfidgetweb.png";
import homePageRITH from "./assets/homepageRITH.png";
import LangTrain from "./assets/langtrain-ad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      image: homePageRITH,
      title: "RITH Trading",
      id: 1,
      github:
        "https://github.com/CapstoneGroupThree/Robin-In-the-Hood-Trading-Corp-1",
      // site: "",
      video: "https://www.youtube.com/watch?v=CEUu0Cvp3uU",
    },
    {
      image: fidgetSpinnerWeb,
      title: "3d Fidget Spinner",
      id: 2,
      github: "https://github.com/Hanlynui/Stress-Relief-Ultra",
      site: "http://3dfidgetspinner.s3-website.us-east-2.amazonaws.com",
    },
    {
      image: LangTrain,
      title: "LangTrain AI Language Teacher",
      id: 2,
      github: "https://github.com/LangTrain/LangTrain-App",
      site: "http://langtrainwaitlist.s3-website.us-east-2.amazonaws.com/",
      video: "https://www.youtube.com/watch?v=sMpO4HBXUq0",
    },
  ];

  return (
    <Section title="Projects 💻" subtitle="Here are some of my projects">
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, site, video }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl duration-300 ease-in-out hover:scale-110 overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3"></img>
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                href={github}
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  alt="project Github"
                  className="text-xl cursor-pointer"
                />
              </a>
              <a
                href={site}
                alt="deployed site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  alt="project site"
                  className="text-large cursor-pointer"
                />
              </a>
              {video ? (
                <a
                  href={video}
                  alt="group video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    alt="project site"
                    className="text-large cursor-pointer"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
