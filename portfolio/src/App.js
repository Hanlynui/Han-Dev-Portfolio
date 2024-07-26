import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Redirect from "./components/Redirect";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  return (
    <div>
      <div className={darkMode ? "dark" : ""}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {location.pathname !== "/redirect" && (
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Intro />
            <Stack />
            <Projects />
            <Contact />
          </div>
        )}
        <Routes>
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
