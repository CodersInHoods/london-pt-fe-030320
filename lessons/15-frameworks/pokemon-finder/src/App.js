import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonCard from "./PokemonCard";

const pokemon = [
  {
    name: "poikachu",
    type: "electric",
    img: "pika.png",
    stats: [
      {
        name: "health",
        value: 100,
      },
    ],
  },
  {
    name: "bulbasaur",
    type: "grass",
    img: "bulb.png",
    stats: [
      {
        name: "health",
        value: 90,
      },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      {pokemon.map((pokemonObject) => <PokemonCard pokemonObject={pokemonObject}/>)}
      {/* if (currentPage === '/userprofile') {
        <UserProfile />
      }
      if (currentPage === '/tweets') {
        <TweetsPage />
      }
      if (currentPage === '/new') {
        <NewTweetPage />
      } */}
    </div>
  );
};

export default App;
