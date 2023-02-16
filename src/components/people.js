import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";

function People() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchTerms] = useState([
    "name",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender"
  ]);

  useEffect(() => {
    starwars.getPeople().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);

  const removeEntry = (index) => {
    setData((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const sortList = (type) => {
    const types = {
      height: "height",
      mass: "mass",
      name: "name"
    };

    const sortProperty = types[type];
    if (sortProperty !== "name") {
      const sorted = [...data].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      console.log(sorted);
      setData(sorted);
    } else {
      const sorted = [...data].sort(function (a, b) {
        if (
          a[sortProperty].toString().toLowerCase() <
          b[sortProperty].toString().toLowerCase()
        )
          return -1;
        if (
          a[sortProperty].toString().toLowerCase() >
          b[sortProperty].toString().toLowerCase()
        )
          return 1;
        return 0;
      });
      console.log(sorted);
      setData(sorted);
    }
  };

  function search(data) {
    return data.filter((item) => {
      return searchTerms.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="people">
      <div className="row h-100 justify-content-center align-items-center p-5">
        <div className="input-group-prepend">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            onChange={(e) => {
              sortList(e.target.value);
            }}
            className="custom-select"
            aria-label="sort results"
          >
            <option value="all" disabled>
              Sort Results
            </option>
            <option value="name">Name</option>
            <option value="height">Height</option>
            <option value="mass">Mass</option>
          </select>
        </div>
      </div>
      <div className="card-deck">
        {search(data).map((item, index) => {
          return (
            <div className="col-sm-6">
              <div className="card mt-5 bg-dark" key={index}>
                <div className="card-body">
                  <h3 className="card-title text-center text-warning">
                    {" "}
                    {item.name}{" "}
                  </h3>
                  <ul className="card-text-m-1 text-warning">
                    <li>Height: {item.height}cm</li>
                    <li>Mass: {item.mass}kg</li>
                    <li>Skin Color: {item.skin_color}</li>
                    <li>Eye Color: {item.eye_color}</li>
                    <li>Birth Year: {item.birth_year}</li>
                    <li>Gender: {item.gender}</li>
                  </ul>
                  <div className="card text-center bg-primary">
                    <button
                      className="bg-primary text-light"
                      onClick={() => removeEntry(index)}
                    >
                      Remove Entry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default People;
