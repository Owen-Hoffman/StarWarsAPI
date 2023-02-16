import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="pt-5">
        <p className="h1 text-warning text-center mb-3 font-weight-bold">
          A simple star wars data source
        </p>
        <div className="text-center p-3">
          <Link to="/people" className="btn btn-primary">
            People
          </Link>
          <Link to="/starships" className="btn btn-primary ml-3">
            Starships
          </Link>
          <Link to="/planets" className="btn btn-primary ml-3">
            Planets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
