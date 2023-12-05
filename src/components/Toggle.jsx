import { FaMoon, FaRegSun } from "react-icons/fa";
import { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  return (
    <button onClick={handleChangeTheme} className="toggle" aria-pressed={darkMode}>
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
