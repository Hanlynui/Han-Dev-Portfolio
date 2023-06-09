import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <div className={darkMode ? "dark" : ""}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Intro />
          <Stack />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
