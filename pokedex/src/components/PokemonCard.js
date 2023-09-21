import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";

function PokemonCard({ pokemon }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const alternarDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  return (
    <div className="pokemon-card" onClick={alternarDetalhes}>
      <img src={pokemon.imagem} alt={pokemon.nome} />
      <h3>{pokemon.nome}</h3>
      {mostrarDetalhes && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}

export default PokemonCard;