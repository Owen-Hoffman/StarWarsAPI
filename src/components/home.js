import React from "react";
import { Link } from "react-router-dom";
import person from '../assets/R2D2.png';
import planet from '../assets/planet.png';
import starship from '../assets/death star.png';

function Home() {
  return (
    <div className="home">
      <div className="pt-5">
        <p className="h1 text-warning text-center mb-3 font-weight-bold">
          A simple star wars data source
        </p>
        <div className="container text-center p-3">
          <Link to="/people">
            <img src={person} class="img-circle" alt="Cinque Terre" width="304" height="236" onClick="/people" />
          </Link>
          <Link to="/starships">
            <img src={starship} class="img-circle" alt="Cinque Terre" width="304" height="236" />
          </Link>
          <Link to="/planets">
            <img src={planet} class="img-circle" alt="Cinque Terre" width="304" height="236" />
          </Link>
        </div>
        <div className="h2 text-warning text-center p-3">
          <p>
            People &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Starships &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Planets
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
