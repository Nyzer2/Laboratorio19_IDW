const container = document.getElementById('pokemon-container');
const pokemonList = [];
const promesas = [];
for (let i = 1; i <= 10; i++) {
    promesas.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()));
}

Promise.all(promesas)
    .then(results => {
        results.forEach(data => {
            pokemonList.push({
                id: data.id,
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                image: data.sprites.front_default
            });
        });

        pokemonList.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            card.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p>ID: ${pokemon.id}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error al cargar Pokémon:', error);
        container.innerHTML = '<p>Error al cargar los datos.</p>';
    });