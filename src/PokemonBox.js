import React, { useState, useEffect } from 'react';

import "./frontpage.css";

//inpt name.name is an ID (form 1 to how many pokemins there is)

export default function PokemonBox(name) {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonPictureSrc, setPokemonPic] = useState('');

    console.log(name.id.name)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+ name.id.name)
          .then(response => response.json())
          .then(pokemon => {
            setPokemonType(pokemon.types[0].type.name)
            setPokemonName(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            setPokemonPic(pokemon.sprites.front_default)
          })
          .catch(error => console.error(error));
      }, []);
    return(
            <div className={`pokemonBox ${pokemonType}`}>
                <div>
                <p>#{name.id.url.substring(34)}</p>
                    <h3>{pokemonName}</h3>
                </div>
                <img src={pokemonPictureSrc}></img>
            </div>
    )
}


