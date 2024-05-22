const createTarget = ({title, year, director, duration, genre, rate, poster}) => {
    //creo la tarjeta
    const target = document.createElement("div");
  
    //creo los elementos de la tarjeta
    const titleTarget = document.createElement("h3");
    const imgTarget = document.createElement("img");
    const descripcionTarget = document.createElement("div");
  
    //asigno los valores a los elementos recien creados
    titleTarget.innerHTML = `<a href="">${title}</a>`;
    imgTarget.src = poster;
  
    //descomprimo genero
    const generos = genre.join(", ");
    //ahora si asigno valores a la descripcion
    descripcionTarget.innerHTML = `<p>Año: ${year}<br>
      Director: ${director}<br>
      Duration: ${duration}<br>
      Género: ${generos}<br>
      Calificación: ${rate}
      `;
    //agrego estilos a la tarjeta
    target.classList.add("target");
    titleTarget.classList.add("titleTarget");
    imgTarget.classList.add("imgTarget");
    descripcionTarget.classList.add("descripcionTarget");
    //appendeo a los hijos a la tarejeta
    target.append(titleTarget, imgTarget, descripcionTarget);
    //selecciono el section de las peliculas y appendeo la tarjeta
    const sectionPeliculas = document.getElementById("sectionPeliculas");
    sectionPeliculas.appendChild(target);
  };

  module.exports = createTarget;