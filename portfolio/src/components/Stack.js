import React from "react";
import Section from "./Section";
import aws from "./assets/aws.png";
import aws2 from "./assets/aws2.png";

const Stack = () => {
  const images = [
    {
      title: "Amazon Web Services Dev",
      url: aws,
    },
    {
      title: "Amazon Web Services CCP",
      url: aws2,
    },
    {
      title: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      title: "Redux",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      title: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "HTML 5",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    },
    {
      title: "Tailwind CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
    {
      title: "CSS 3",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    },
    {
      title: "Next.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      title: "Express",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "PostgreSQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
    },
    {
      title: "Sequelize",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg",
    },
    {
      title: "Webpack",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg",
    },
    {
      title: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
    },
    {
      title: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    },
  ];

  return (
    <div className="mb-10">
      <Section title="Skills 💡" subtitle="Swipe to see more!">
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <img
              src={image.url}
              alt={`Skill ${index + 1}`}
              key={index}
              className="w-1/3 md:w-1/4 lg:w-1/5 h-30 md:h-30 lg:h-30 object-cover mb-3 filter dark:invert m-2 mr-1"
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Stack;
