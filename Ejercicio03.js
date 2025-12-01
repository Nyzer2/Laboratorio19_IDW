async function fetchPikachuData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        //Api da la altura y peso en en centímetros y hectogramos
        const heightInMeters = data.height / 10;
        const weightInKg = data.weight / 10;

        console.log(`Nombre: ${data.name}`);
        console.log(`Altura: ${heightInMeters} m`);
        console.log(`Peso: ${weightInKg} kg`);
    } catch (error) {
        console.error('Error al obtener los datos de Pikachu:', error.message);
    }
}

fetchPikachuData();
