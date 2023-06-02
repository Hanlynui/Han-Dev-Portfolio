import React from "react";
import Section from "./Section";

const Contact = () => {
  //todo add a bot checker here, i want to make a contact section that will send me an email, also put my linkedin and other contact info up, maybe have my phone number and email to show after users settle a bot check

  //todo fix clearing message on submit
  //todo also save state for light and dark mode
  return (
    <Section title="Contact 📱" subtitle="Let's get in touch!">
      <div className="p-8 text-center w-full mx-auto md:max-w-lg lg:max-w-xl">
        <form
          action="https://getform.io/f/985c5780-91ab-4b36-a43e-ebbc640e523b"
          method="POST"
        >
          <div className="grid gap-4">
            <div className="flex flex-col items-center">
              <label className="capitalize text-sm py-2 font-extralight">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-sm py-2 font-extralight">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-sm py-2 font-extralight">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-sm py-2 font-extralight">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="my-8 bg-gradient-to-r  from-gray-400 to-blue-900 text-white px-6 py-3 font-bold uppercase tracking-wider cursor-pointer hover:scale-105 duration-200 rounded-lg ">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
