import React from "react";

const PokemonCard = (props) => {
  const pokemonObject = props.pokemonObject;

  return (
    <div className="pokemon">
      <h3>{pokemonObject.name}</h3>
      <button className="type">{pokemonObject.type}</button>
      <input />
    </div>
  );
};

export default PokemonCard;
