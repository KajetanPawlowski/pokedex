import "./frontpage.css";

export default function PokemonBox(name) {
    return
        <div className={getPokemonType(name)} id={name}> 
            <h3 className="nameLabel">{getPokemonName(name)}</h3>
            <div className="pictureBox">{getPokemonPicture(name)}</div>
        </div>
}


function getPokemonName(name){
    fetch("https://pokeapi.co/api/v2/pokemon/" +name.name)//name is an object !!!!
    .then(response => {
        if (response.ok) return response.json()
        throw new Error("Network response was not OK")
    })
    .then(pokemon => console.log(pokemon.name))
    .catch(err => console.log(err))
}

function getPokemonPicture(name){
    fetch("https://pokeapi.co/api/v2/pokemon/" +name.name)//name is an object !!!!
    .then(response => {
        if (response.ok) return response.json()
        throw new Error("Network response was not OK")
    })
    .then(pokemon => console.log(pokemon))
    .catch(err => console.log(err))
}

function getPokemonType(name){
    fetch("https://pokeapi.co/api/v2/pokemon/" +name.name)//name is an object !!!!
    .then(response => {
        if (response.ok) return response.json()
        throw new Error("Network response was not OK")
    })
    .then(pokemon => {return (pokemon.types[0].type.name)})
    .catch(err => console.log(err))
}

