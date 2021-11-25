import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{isLightTheme ? "Night Mode" : "Day Mode"}</button>;
};

export default ThemeToggle;
