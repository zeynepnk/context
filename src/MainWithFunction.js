import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colors";

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1>Main With Function</h1>
      <p>This is a paragraph </p>
    </main>
  );
};

export default Main;
