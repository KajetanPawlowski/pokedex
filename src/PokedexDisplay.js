

import React, { useState, useEffect } from 'react';
import PokemonBox from './PokemonBox';
import "./frontpage.css";

export default function PokedexDisplay() {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [visiblePokemon, setVisiblePokemon] = useState([])
    const pokemonPerPage = 12;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.results)
        setVisiblePokemon(data.results.slice(startIndex, endIndex))
    })
      .catch(error => console.error(error));
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setVisiblePokemon(pokemonData.slice(startIndex, endIndex))
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setVisiblePokemon(pokemonData.slice(startIndex, endIndex))
  };

  const startIndex = currentPage * pokemonPerPage;
  const endIndex = startIndex + pokemonPerPage;
   
  console.log(pokemonData)

  return (
    <div className="frontPage">
        <div className="pokedexDisplay">
            {visiblePokemon.map(pokemon => (
                <PokemonBox key={pokemon.name} id={pokemon} />
            ))}
        </div>
        <div className="displayButtons">
            {currentPage > 0 && <button onClick={prevPage}>Prev</button>}
            {endIndex < pokemonData.length && <button onClick={nextPage}>Next</button>}
        </div>
    </div>
  );
}
