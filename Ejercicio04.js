async function fetchCharizardSprite() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }   
        const data = await response.json();
        const spriteUrl = data.sprites.front_default;
        
        console.log(`URL del sprite front_default de Charizard: ${spriteUrl}`);
    } catch (error) {
        console.error('Error al obtener el sprite de Charizard:', error.message);
    }
}
fetchCharizardSprite();