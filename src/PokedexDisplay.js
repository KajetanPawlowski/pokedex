import "./frontpage.css";

import PokemonBox from "./PokemonBox";

export default function PokedexDisplay() {
    const pokemonNumbers = Array.from(Array(20), (_, i) => i + 1);
    pokemonNumbers.forEach(element => element = element+20)

    return(<div id="display"  className="pokedexDisplay">
        {pokemonNumbers.map(number => (
        <PokemonBox key={number} name={number.toString()} />
      ))}
     
    </div>
    );
}