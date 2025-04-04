



const pokemonList = [
    {
  name: "bulbasaur",
  imgSrc: "https://raw.githubuser.content.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

    },
    {
        name: "mew",
         
        
    },

];

function PokemonCard() {

 const pokemon = pokemonList[1];
 return (

 <figure>
  {pokemon.imgSrc ? (
 <img 
    src= "https://raw.githubuser.content.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    alt= "bulbasaur"
    
    />

  ) : (
 <p>???</p>
 
 
)}
  <figcaption>{pokemon.name}</figcaption>
 </figure>
  );
};

export default PokemonCard;