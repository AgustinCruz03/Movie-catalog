const createTarget = require("./createTarget")
const axios = require("axios")
// ESTA ES NUESTRA FORMA VIEJA ANTES DE USAR AXIOS
// $.get("https://students-api.up.railway.app/movies", (data, status) => {
//   data.forEach(createTarget);
// });
// console.log("estoy probando que tengo que actualizar el bundle, Agustin sos un crack")

// // AHORA VAMOS A USAR PROMESAS USANDO SUS METODOS THEN Y CATCH PARA OBTENER LOS DATOS O UN ERROR
// const promiseMovies = axios.get("https://students-api.up.railway.app/movies")
// promiseMovies.then((data)=>{
//   //estamos dentro de la funcion succes handler
//   //IMPORTANTE: si todo sale bien el parametro data de la funcion tiene dentro una propiedad "data" con la información
//   data.data.forEach(createTarget)
// }).catch((error)=>{
//   //estamos dentro de la funcion error handler
//   console.log(error.message)
// })

// AHORA VAMOS A USAR PROMESAS USANDO ASYNC/AWAIT PARA OBTENER LOS DATOS O UN ERROR
const traerInformacion = async () => {
  try {
    //intentamos traer la información sin errores
  const promesa = await axios.get("http://localhost:3000/movies") //esta funcion espera a ser resuelta, como que ya no es tan asincronica no?
//IMPORTANTE: si todo sale bien la promesa tiene dentro una propiedad "data" con la información en este caso el array de pelis
    promesa.data.forEach(createTarget)
  }
  catch(err){
    //si detectó un error el bloque de arriba viene a este bloqué 
    console.log(err.message)
  }
}

//Y llamo a la funcion async(sino no se ejecuta)
traerInformacion();