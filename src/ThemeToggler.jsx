import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
// import { FaArrowRight } from "react-icons/fa";

const themeTogglerStyle = {
  cursor: "pointer",
};
const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span title="switch theme">
        <h2>Theme Mode</h2>Click {" "}
        {themeMode === "light" ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default ThemeToggler;
