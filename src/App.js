import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import "./App.scss";
import "./mobile.styles.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
    </div>
  );
}

export default App;
