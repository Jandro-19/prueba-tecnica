document.addEventListener('DOMContentLoaded', function() {
    const contenedorArticulos = document.getElementById('contenedor-articulos');

    fetch('/api/articulos')  
        .then(response => response.json())
        .then(datosArticulos => {
            datosArticulos.forEach(articulo => {
                const articuloDiv = document.createElement('div');
                articuloDiv.classList.add('articulo');

                const tituloElemento = document.createElement('h2');
                tituloElemento.textContent = articulo.titular;

                const contenidoElemento = document.createElement('p');
                contenidoElemento.textContent = articulo.contenido;

                articuloDiv.appendChild(tituloElemento);
                articuloDiv.appendChild(contenidoElemento);
                contenedorArticulos.appendChild(articuloDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos de los artículos:', error);
        });
});
