const container = document.getElementById('pokemon-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let pokemonList = [];
let currentIndex = 0;
const perPage = 3;

const promises = [];
for (let i = 1; i <= 12; i++) {
    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()));
}
Promise.all(promises)
    .then(results => {
        // Almacenar en la lista
        results.forEach(data => {
            pokemonList.push({
                id: data.id,
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                image: data.sprites.front_default
            });
        });
        displayPokemons();
    })
    .catch(error => {
        console.error('Error al cargar Pokémon:', error);
        container.innerHTML = '<p>Error al cargar los datos.</p>';
    });
function displayPokemons() {
    container.innerHTML = '';
    const start = currentIndex * perPage;
    const end = start + perPage;
    const currentPokemons = pokemonList.slice(start, end);
    
    currentPokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>ID: ${pokemon.id}</p>
        `;
        container.appendChild(card);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = end >= pokemonList.length;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayPokemons();
    }
});
nextBtn.addEventListener('click', () => {
    if ((currentIndex + 1) * perPage < pokemonList.length) {
        currentIndex++;
        displayPokemons();
    }
});
