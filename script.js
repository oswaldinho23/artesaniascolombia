
document.addEventListener('DOMContentLoaded', () => {
    const citiesData = [
        {
            name: 'Tunja',
            description: 'Capital de Boyacá, conocida por su rica historia y arquitectura colonial.',
            photo: 'tunja.jpg',
            artisans: [
                {
                    name: 'Artista 1',
                    photo: 'artista1.jpg',
                    description: 'Laureano Melo Artesano especializado en hogar y decoracion con ceramica'
                },
                {
                    name: 'Artista 2',
                    photo: 'artista2.jpg',
                    description: 'Rosmira Lopera Experta en Tejidos.'
                }
            ]
        },
        {
            name: 'Bogotá',
            description: 'La capital de Colombia, un centro cultural y comercial.',
            photo: 'bogota.jpg',
            artisans: [
                {
                    name: 'Artista 3',
                    photo: 'artista3.jpg',
                    description: 'Valentina Acosta Artesano de madera tallada.'
                },
                {
                    name: 'Artista 4',
                    photo: 'artista4.jpg',
                    description: 'Dilia Ester Afanador Creadora de Artesanias en Madera.'
                }
            ]
        }
    ];

    const citiesContainer = document.getElementById('cities-container');

    citiesData.forEach(city => {
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city');

        cityDiv.innerHTML = `
            <h2>${city.name}</h2>
            <img src="${city.photo}" alt="${city.name}">
            <p>${city.description}</p>
            ${city.artisans.map(artisan => `
                <div class="artisan">
                    <img src="${artisan.photo}" alt="${artisan.name}">
                    <div class="artisan-info">
                        <h3>${artisan.name}</h3>
                        <p>${artisan.description}</p>
                    </div>
                </div>
            `).join('')}
        `;

        citiesContainer.appendChild(cityDiv);
    });
});

// JavaScript para manejar el clic del botón
document.getElementById('apiButton').addEventListener('click', function() {
    // URL de la API de regiones de Colombia
    const apiUrl = 'https://api-colombia.com/api/v1/region';
    
    // Abre la URL en una nueva pestaña
    window.open(apiUrl, '_blank');
});


//Notas:Fotos: Asegúrate de colocar las imágenes (tunja.jpg, bogota.jpg, artista1.jpg, etc.) en la misma carpeta que tus archivos HTML, CSS y JavaScript o ajusta las rutas de las imágenes según su ubicación.Adaptabilidad: El diseño es responsivo, pero puedes ajustarlo según tus necesidades específicas. La idea es que las imágenes y la información se adapten bien a diferentes tamaños de pantalla.
//Estructura de Datos: Los datos de las ciudades y artesanías están definidos en un array de objetos en script.js. Puedes agregar, eliminar o modificar estos objetos para reflejar la información que deseas mostrar.
//Con esta estructura, tendrás una página web que muestra información sobre ciudades y artesanías con imágenes. Puedes ampliar esta base según tus necesidades, agregando más funcionalidades o ajustando el diseño. ¡Espero que te sea útil!