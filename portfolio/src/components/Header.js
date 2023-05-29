import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const { darkMode, setDarkMode } = props;

  return (
    <header
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white
    "
    >
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-xl">Welcome!</h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FontAwesomeIcon
              icon={faSun}
              className="text-2xl cursor-pointer"
              style={{ color: "#d8d5d5" }}
            />
          ) : (
            <FontAwesomeIcon
              className="text-2xl cursor-pointer"
              icon={faCloudMoon}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
