document.getElementById('search-btn').addEventListener('click', function() {
    const input = document.getElementById('pokemon-input').value.trim().toLowerCase();
    if (!input) {
        alert('Por favor, ingresa un nombre o ID válido.');
        return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado.');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('pokemon-data').style.display = 'block';
            
            document.getElementById('pokemon-image').src = data.sprites.front_default;
            document.getElementById('pokemon-name').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            
            const types = data.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ');
            document.getElementById('pokemon-types').textContent = types;
        })
        .catch(error => {
            showError(error.message);
        });
});
function showError(message) {
    document.getElementById('pokemon-data').style.display = 'none';
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').style.display = 'block';
}