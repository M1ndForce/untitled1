import React from "react";
import "./styles/App.css";
import ThemeComponent from "./components/ThemeComponent";
import ModalComponent from "./components/ModalComponent";
import RootProvider from "./context/RootProvider";

function App() {
  return (
    <div className="App">
      <RootProvider>
        <ThemeComponent />
        <ModalComponent />
      </RootProvider>
    </div>
  );
}

export default App;
