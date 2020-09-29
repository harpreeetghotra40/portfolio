import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import "./App.scss";
import "./mobile.styles.scss";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
