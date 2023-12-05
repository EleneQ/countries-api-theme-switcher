import { FaMoon, FaRegSun } from "react-icons/fa";
import { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    document.body.classList.toggle("dark"); //probably should be done using the context api in a bigger application
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={handleChangeTheme}
      className="toggle bg-transparent border-0"
      aria-pressed={darkMode}
    >
      {darkMode ? (
        <div className="toggle-light">
          <FaRegSun />
          <p>Light Mode</p>
        </div>
      ) : (
        <div className="toggle-dark">
          <FaMoon />
          <p>Dark Mode</p>
        </div>
      )}
    </button>
  );
};

export default Toggle;
