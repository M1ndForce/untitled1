import React from "react";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";

export default function ThemeComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Update theme</button>
      <div style={themeStyle}>Function theme</div>
    </>
  );
}
