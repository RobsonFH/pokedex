import React from "react";

function PokemonDetails({ pokemon }) {
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Description: {pokemon.description}</p>
    </div>
  );
}

export default PokemonDetails;