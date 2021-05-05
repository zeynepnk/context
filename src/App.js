import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Header";
import Main from "./MainWithFunction";
import MainWithClass from "./MainWithClass";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
        <MainWithClass />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
