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
            document.getElementById('stats-table').style.display = 'table';
            
            const tbody = document.getElementById('stats-body');
            tbody.innerHTML = '';
            
            data.stats.forEach(stat => {
                const row = document.createElement('tr');
                const statName = stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1).replace('-', ' ');
                const statValue = stat.base_stat;
                row.innerHTML = `<td>${statName}</td><td>${statValue}</td>`;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            showError(error.message);
        });
});
function showError(message) {
    document.getElementById('stats-table').style.display = 'none';
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-message').style.display = 'block';
}