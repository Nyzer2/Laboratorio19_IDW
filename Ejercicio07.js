document.getElementById('search-btn').addEventListener('click', function() {
    const id = document.getElementById('pokemon-id').value;
    if (!id) {
        showError('Por favor, ingresa un ID válido.');
        return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
            document.getElementById('pokemon-id-display').textContent = data.id;
            document.getElementById('pokemon-weight').textContent = (data.weight / 10).toFixed(1); 
            document.getElementById('pokemon-height').textContent = (data.height / 10).toFixed(1); 
            
            const abilities = data.abilities.map(ability => ability.ability.name.charAt(0).toUpperCase() 
            + ability.ability.name.slice(1)).join(', ');
            document.getElementById('pokemon-abilities').textContent = abilities;
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