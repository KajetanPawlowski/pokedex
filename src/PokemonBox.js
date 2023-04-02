import React, { useState, useEffect } from 'react';

import "./frontpage.css";



export default function PokemonBox(name) {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonType, setPokemonType] = useState('');
    const [pokemonPictureSrc, setPokemonPic] = useState('');
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name.name)
          .then(response => response.json())
          .then(pokemon => {
            setPokemonType(pokemon.types[0].type.name)
            setPokemonName(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            setPokemonPic(pokemon.sprites.front_default)
          })
          .catch(error => console.error(error));
      }, []);
      console.log(pokemonType)
    return(
            <div className={`pokemonBox ${pokemonType}`}> 
                <h3>{pokemonName}</h3>
                <img src={pokemonPictureSrc}></img>
            </div>
    )
}






function getPokemonType(name){
    fetch("https://pokeapi.co/api/v2/pokemon/" +name.name)//name is an object !!!!
    .then(response => {
        if (response.ok) return response.json()
        throw new Error("Network response was not OK")
    })
    .then(pokemon => updateType(pokemon))
    .catch(err => console.log(err))
}

function updateType(pokemon){
    type = pokemon.types[0].type.name;
}

