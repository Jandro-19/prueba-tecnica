document.addEventListener('DOMContentLoaded', function() {
    const contenedorArticulos = document.getElementById('contenedor-articulos');

    // Ejemplo de datos de artículos (puedes reemplazar con tus datos reales)
    const datosArticulos = [
        { titular: 'Artículo 1', contenido: 'Contenido del artículo 1' },
        { titular: 'Artículo 2', contenido: 'Contenido del artículo 2' },
        { titular: 'Artículo 3', contenido: 'Contenido del artículo 3' },
        { titular: 'Artículo 4', contenido: 'Contenido del artículo 4' },
        { titular: 'Artículo 5', contenido: 'Contenido del artículo 5' }
    ];

    // Itera sobre los datos de los artículos para mostrarlos en el DOM
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
});
