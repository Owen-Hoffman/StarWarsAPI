import axios from "axios";

//get all functions sourced from go-diego on github
function getAllStarwarsPeople() {
  let people = [];
  return axios("https://swapi.dev/api/people/")
    .then((response) => {
      people = response.data.results;
      return response.data.count;
    })
    .then((count) => {
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises = [];
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.dev/api/people?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then((response) => {
      people = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        people
      );
      return people;
    })
    .catch((error) => console.log("Properly handle your exception here"));
}
function getAllStarwarsPlanets() {
  let people = [];
  return axios("https://swapi.dev/api/planets/")
    .then((response) => {
      people = response.data.results;
      return response.data.count;
    })
    .then((count) => {
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises = [];
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.dev/api/planets?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then((response) => {
      people = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        people
      );
      return people;
    })
    .catch((error) => console.log("Properly handle your exception here"));
}
function getAllStarwarsStarships() {
  let people = [];
  return axios("https://swapi.dev/api/starships/")
    .then((response) => {
      people = response.data.results;
      return response.data.count;
    })
    .then((count) => {
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises = [];
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.dev/api/starships?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then((response) => {
      people = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        people
      );
      return people;
    })
    .catch((error) => console.log("Properly handle your exception here"));
}

const starwars = {
  getPeople: async () => {
    try {
      const response = await getAllStarwarsPeople();
      return response;
    } catch (error) {
      return error;
    }
  },
  getPlanets: async () => {
    try {
      const response = await getAllStarwarsPlanets();
      return response;
    } catch (error) {
      return error;
    }
  },
  getStarships: async () => {
    try {
      const response = await getAllStarwarsStarships();
      return response;
    } catch (error) {
      return error;
    }
  }
};

export default starwars;
