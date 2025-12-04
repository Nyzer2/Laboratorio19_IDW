async function fetchPokemon() {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        const pokemonList = document.getElementById('pokemon_list');
        data.results.forEach(pokemon=>{
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            pokemonList.appendChild(li);
        });
    }catch(error){
        console.error('Error al obtener los datos:', error);
    }
}
fetchPokemon();