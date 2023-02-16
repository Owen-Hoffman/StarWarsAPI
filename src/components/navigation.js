import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Simple Star Wars Data
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/people">
                  People
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/starships">
                  Starships
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/planets">
                  Planets
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
