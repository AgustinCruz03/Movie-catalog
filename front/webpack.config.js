module.exports = {
    entry: {
        index: "./scripts/index.js", // Punto de entrada para la página principal
        agregarPelicula: "./scripts/agregarPelicula.js" // Punto de entrada para la página "agregar_pelicula"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js" // Utilizamos el nombre de entrada como el nombre del bundle
    },
};
