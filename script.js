//Agregar al inicio para obtener imagenes
//https://image.tmdb.org/t/p/original/
///////////////
//Pagina para buscar genero
//"https://api.themoviedb.org/3/genre/movie/list?api_key=6ef51d843bfe08d642d218c1c25c2915&language=en-US"
//Pagina para buscar todas las peliculas de un genero
//https://api.themoviedb.org/3/search/movie?api_key=6ef51d843bfe08d642d218c1c25c2915&language=es-ES&query=terror

function openNav(){
  document.getElementById("mobile-menu").style.width = "100%"
}

function closeNav(){
  document.getElementById("mobile-menu").style.width = "0%"
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (formulario.nombrePelicula.value) {
    ejecutar(formulario.nombrePelicula.value);
  }
  formulario.nombrePelicula.value = "";
});

ejecutar("lo ultimo");

function ejecutar(parametro) {
  const path = "https://image.tmdb.org/t/p/original/";

  const contenedor = document.getElementById("contenedor");

  let URL_API =
    "https://api.themoviedb.org/3/search/movie?api_key=6ef51d843bfe08d642d218c1c25c2915&language=es-ES&query=" +
    parametro;

  fetch(URL_API)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      console.log(resultado);
      contenedor.innerHTML = "";
      for (const pelicula of resultado.results) {
        if (pelicula.poster_path) {
          contenedor.innerHTML += `
                <div id='tarjeta' >
                <div id='contenedorImagen'><img  src=${path}${pelicula.poster_path} id='imagen' ></div>
                <div id='texto'><p>${pelicula.title}</p></div>
                </div>
                `;
        }
      }
    });
}
