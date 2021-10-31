import React from "react";
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hi I am a React App!!</h1>
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
