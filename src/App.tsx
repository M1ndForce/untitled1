import React from "react";
import "./styles/App.css";
import ThemeComponent from "./components/ThemeComponent";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
