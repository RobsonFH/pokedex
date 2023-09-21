import React from "react";

function PokemonDetails({ pokemon }) {
  return (
    <div className="pokemon-details">
      <h2>{pokemon.nome}</h2>
      <p>Tipo: {pokemon.tipo}</p>
      <p>Descrição: {pokemon.descricao}</p>
    </div>
  );
}

export default PokemonDetails;