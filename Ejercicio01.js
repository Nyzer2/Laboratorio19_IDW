async function fetchPokemonName() {
    const pokemonIdOrName = prompt("Ingresa el ID o nombre de un Pokémon (ej. 1 o bulbasaur):");
    if (!pokemonIdOrName) {
        console.log("No se ingresó ningún ID o nombre.");
        return;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIdOrName}`);
        
        if (!response.ok) {
            throw new Error(`Pokémon no encontrado. Código de error: ${response.status}`);
        }   
        const data = await response.json();
        console.log(`El nombre del Pokémon es: ${data.name}`);
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error.message);
    }
}
fetchPokemonName();