import React, { Component } from "react";
import ReactDOM from "react-dom";
import People from "./components/people";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Starships from "./components/starships";
import Planets from "./components/planets";
import background from "./assets/stars.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
        >
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/starships" element={<Starships />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
