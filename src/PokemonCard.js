import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./pokemonCard.css"
import "./frontpage.css";

export default function PokemonCard() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonPictureSrc, setPokemonPic] = useState('');
    const [pokemonWeight, setPokemonWeight] = useState(0)
    const [pokemonExp, setPokemonExp] = useState(0);
    const [pokemonAbilities, setPokemonAbilities] = useState([])

    const {name} = useParams()


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+ name)
          .then(response => response.json())
          .then(pokemon => {
            setPokemonType(pokemon.types[0].type.name)
            setPokemonName(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            setPokemonPic(pokemon.sprites.front_default)
            setPokemonExp(pokemon.base_experience)
            setPokemonWeight(pokemon.weight)
            setPokemonAbilities(pokemon.abilities)
          })
          .catch(error => console.error(error));
      }, []);

  return (
    <div className="pokemon-card-container">
      <div className={`pokemon-card  ${pokemonType}`} >
        <div className="pokemon-card__header">
          <h2 className="pokemon-card__name">{pokemonName}</h2>
          <p className="pokemon-card__type">#{pokemonType}</p>
        </div>
        <div className="pokemon-card__details">
          <img src={pokemonPictureSrc} alt={pokemonName} className="pokemon-card__image" />
          <ul>
            <li><strong>Experience:</strong> {pokemonExp}</li>
            <li><strong>Weight:</strong> {pokemonWeight}</li>
            <li><strong>Abilities:</strong> {pokemonAbilities.map(ability => ability.ability.name).join(', ')}</li>
          </ul>
        </div>
      </div>
      <Link to="/" >
        <button className="goBackBtn">Go Back</button>
      </Link>
    </div>
  );
}
