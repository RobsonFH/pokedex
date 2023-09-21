import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";

function PokemonCard({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pokemon-card" onClick={toggleDetails}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      {showDetails && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}

export default PokemonCard;