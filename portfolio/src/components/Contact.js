import React from "react";
import Section from "./Section";

const Contact = () => {
  //todo add a bot checker here, i want to make a contact section that will send me an email, also put my linkedin and other contact info up, maybe have my phone number and email to show after users settle a bot check
  return (
    <Section title="Contact 📱" subtitle="Let's get in touch!">
      <div className="p-8 text-left w-1/2">
        <form action="" method="POST">
          <div className="gap-4 w-full">
            <div className="flex flex-col">
              <label className="capitalize text-sm py-2 font-extralight">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
          </div>
          <div className="gap-4 w-full">
            <div className="flex flex-col">
              <label className="capitalize text-sm py-2 font-extralight">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
          </div>
          <div className="gap-4 w-full">
            <div className="flex flex-col">
              <label className="capitalize text-sm py-2 font-extralight">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></input>
            </div>
          </div>
          <div className="gap-4 w-full">
            <div className="flex flex-col">
              <label className="capitalize text-sm py-2 font-extralight">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="my-8 bg-gradient-to-r  from-gray-400 to-blue-900 text-white px-6 py-3 font-bold uppercase tracking-wider cursor-pointer hover:scale-105 duration-200 rounded-lg ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
