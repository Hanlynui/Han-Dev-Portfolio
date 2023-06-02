import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import han from "./assets/linhanyuBRM.png";

const Intro = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center p-6 text-center">
      {" "}
      <h2 className="text-5xl text-rose-700 uppercase font-bold">Han Yu Lin</h2>
      <h3 className="py-3 text-2xl">Frontend Software Engineer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello
        <span>
          <FontAwesomeIcon
            className="text-4xl ml-1 mr-1"
            icon={faHandshake}
            shake
            style={{ color: "#ffd500" }}
          />
        </span>
        , nice to meet you here! I'm your Front End Software Engineer in a suit
        with expertise in React, Redux, UI/UX design, AI, and more... Passionate
        about crafting intuitive and visually appealing web applications that
        enhance user experiences, I bring project management expertise to ensure
        seamless coordination and deliver exceptional outcomes. Let's
        collaborate on innovative solutions that provide remarkable value to
        your users.
      </p>
      <div
        className="flex justify-evenly
         py-8 lg:py-16 text-3xl w-full md:w-1/4"
      >
        <a
          href="https://www.linkedin.com/in/hlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            alt="Han's LinkedIn Profile"
            className="cursor-pointer "
          />
        </a>
        <a
          href="https://github.com/Hanlynui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            alt="Han's Github"
            className="cursor-pointer"
          />
        </a>
      </div>
      <div>
        <img
          src={han}
          alt="Han"
          className="w-70 h-70 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-gray-300 rounded-xl pt-5"
        ></img>
        <a
          href="https://docs.google.com/document/d/1-B6rBqbHYNsm_YL0CxatxwbeWFtt8DV9/edit?usp=sharing&ouid=102197811022513384394&rtpof=true&sd=true"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xl justify-center mt-10 bg-gradient-to-r from-gray-400 to-blue-900 text-white [y-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      <div className="mt-10 ">
        <FontAwesomeIcon
          icon={faAnglesDown}
          className="text-gray-400 text-2xl animate-bounce"
        />
      </div>
    </div>
  );
};

export default Intro;
