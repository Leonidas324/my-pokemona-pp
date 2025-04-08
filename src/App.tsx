import {useState} from "react";
import './App.css'

import PokemonCard from "./components/PokemonCard.tsx";






const pokemonList =  [
  {
     name: "bulbasaur",
     imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",


  },
  {
   name: "mew",
   imgSrc: "https://www.pokepedia.fr/images/thumb/e/e6/Mew-RFVF.png/800px-Mew-RFVF.png",

  }

];




function App() {
const [ pokemonName, setPokemonName ] = useState("bulbasaur");
const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if(pokemon == null) {
   throw new Error("Invalid pokemon name");

  }

  return (
   <div>
        <PokemonCard pokemon={pokemon} />
   </div>
  );

const handleBulbasaurClick = () => {
 
  setPokemonName("bulbasaur");
};

const handleMewClick = () => {
  setPokemonName ("mew");

};

return (
   <div>
   <button onClick={handleBulbasaurClick}>Bulbasaur</button> 
   <button onClick={handleMewClick}>Mew</button>

   </div>


);
}




export default App;
