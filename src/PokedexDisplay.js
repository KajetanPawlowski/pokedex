import "./frontpage.css";

import PokemonBox from "./PokemonBox";

export default function PokedexDisplay() {
    const pokemonNumbers = Array.from(Array(5), (_, i) => i + 1);

    return(<div id="display"  className="pokedexDisplay">
        {pokemonNumbers.map(number => (
        <PokemonBox key={number} name={number.toString()} />
      ))}
     
    </div>
    );
}