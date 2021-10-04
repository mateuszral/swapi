import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const initialState = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
};

const dataTypes = {
  films: 'films',
  people: 'people',
  planets: 'planets',
  species: 'species',
  starships: 'starships',
  vehicles: 'vehicles',
};

const TabContent = styled.div`
  display: ${({ isActive }) => (isActive ? 'initial' : 'none')};
`;

const Home = () => {
  const { films, people, planets, species, starships, vehicles } = dataTypes;

  const [apiData, setApiData] = useState(initialState);
  const [activeTab, setActiveTab] = useState(films);

  useEffect(() => {
    Object.values(dataTypes).forEach((type) => {
      axios.get(`https://swapi.dev/api/${type}`).then(({ data }) => {
        setApiData((prevState) => ({
          ...prevState,
          [type]: data,
        }));
      });
    });
  }, []);

  console.log(apiData);

  const handleTabChange = (type) => {
    setActiveTab(type);
  };

  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <ul>
          <button onClick={() => handleTabChange(films)}>Films</button>
          <button onClick={() => handleTabChange(people)}>People</button>
          <button onClick={() => handleTabChange(planets)}>Planets</button>
          <button onClick={() => handleTabChange(species)}>Species</button>
          <button onClick={() => handleTabChange(starships)}>Starships</button>
          <button onClick={() => handleTabChange(vehicles)}>Vehicles</button>
        </ul>
      </div>
      <TabContent isActive={activeTab === films} id="films">
        {apiData.people.results ? (
          apiData.people.results.map(
            ({
              birth_year: birthYear,
              gender,
              eye_color: eyeColor,
              hair_color: hairColor,
              height,
              mass,
              name,
            }) => (
              <div key={name}>
                <p>Birth year: {birthYear}</p>
                <p>Eye color: {eyeColor}</p>
                <p>Gender: {gender}</p>
                <p>Hair color: {hairColor}</p>
                <p>Height: {height}</p>
                <p>Mass: {mass}kg</p>
                <p>Name: {name}</p>
              </div>
            ),
          )
        ) : (
          <p>Error when fetching people</p>
        )}
      </TabContent>
      <TabContent isActive={activeTab === people} id="people">
        people
      </TabContent>
      <TabContent isActive={activeTab === planets} id="planets">
        planets
      </TabContent>
      <TabContent isActive={activeTab === species} id="species">
        species
      </TabContent>
      <TabContent isActive={activeTab === starships} id="starships">
        starships
      </TabContent>
      <TabContent isActive={activeTab === vehicles} id="vehicles">
        vehicles
      </TabContent>
    </div>
  );
};

export default Home;
