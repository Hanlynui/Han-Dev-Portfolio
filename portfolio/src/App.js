import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Intro />
        <Projects />
      </div>
    </div>
  );
}

export default App;
