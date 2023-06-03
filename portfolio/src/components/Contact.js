import React, { useState } from "react";
import Section from "./Section";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //todo add a bot checker here,
  // todo change alert to i want to make a contact section that will send me an email, also put my linkedin and other contact info up, maybe have my phone number and email to show after users settle a bot check
  const formSubmit = (e) => {
    e.preventDefault();

    if (captchaValue === null) {
      // The reCAPTCHA has not been completed, so we don't submit the form
      alert("Please complete the reCAPTCHA");
      return;
    }

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/985c5780-91ab-4b36-a43e-ebbc640e523b", {
      method: "POST",
      body: formData,
    }).then(() => {
      setQuery({ name: "", phone: "", email: "", message: "" });
      alert("Message Sent :)");
    });
  };

  return (
    <Section title="Contact 📱" subtitle="Let's get in touch!">
      <div className="p-2 text-center w-full mx-auto md:max-w-lg lg:max-w-xl">
        <form method="POST" onSubmit={formSubmit}>
          <div className="grid gap-4">
            <div className="flex flex-col items-center">
              <label className="capitalize text-med py-2 font-extralight">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                required
                value={query.name}
                onChange={handleParam()}
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-med py-2 font-extralight">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                required
                value={query.phone}
                onChange={handleParam()}
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-med py-2 font-extralight">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                required
                value={query.email}
                onChange={handleParam()}
              ></input>
            </div>
            <div className="flex flex-col items-center">
              <label className="capitalize text-med py-2 font-extralight">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full border-2 rounded-lg p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                required
                value={query.message}
                onChange={handleParam()}
              ></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6Lc0D18mAAAAAJjNrzAMVo0hDu-zgRtsjZQuDhCo"
              onChange={handleCaptchaChange}
              className="flex justify-center"
            />
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
