async function fetchRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 898) + 1; 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        
        const pokemonImage = document.getElementById('pokemon-image');
        const pokemonName = document.getElementById('pokemon-name');
        
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.style.display = 'block';
        pokemonName.textContent = data.name;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
    }
}
fetchRandomPokemon();
document.getElementById('get-random').addEventListener('click', fetchRandomPokemon);