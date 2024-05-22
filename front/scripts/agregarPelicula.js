const axios = require("axios")

const limpiarHandler = () => {
    const inputs = document.getElementsByTagName("input")
    for (let input of inputs) {
        input.value = "";
    }
} 

const submitHandler = () => {
    const inputs = document.getElementsByTagName("input")
    for (let input of inputs) {
        if(!input.value){
            return alert("no se pudo enviar el formulario, hay campos vacios")
        }
    }
    submitMovie()
    alert("Pelicula subida correctamente, puedes verla en la seccion 'Home'")
}

const submitMovie = async () => {
    try {
        const title = document.getElementById("inputTitulo").value
        const year = document.getElementById("inputAnio").value
        const director = document.getElementById("inputDirector").value
        const duration = document.getElementById("inputDuracion").value
        let genre = document.getElementById("inputGenero").value
        genre = genre.split(",")
        const rate = document.getElementById("inputCalificacion").value
        const poster = document.getElementById("inputPoster").value

    await axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre:genre,
      rate,
      poster,
    });
    } catch (error) {
        console.log(error.message)
    }
}

const btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.addEventListener("click", limpiarHandler)


const btnSubir = document.getElementById("btnSubir")
btnSubir.addEventListener("click", submitHandler)