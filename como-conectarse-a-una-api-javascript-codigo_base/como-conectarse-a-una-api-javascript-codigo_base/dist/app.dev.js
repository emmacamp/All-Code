"use strict";

var pagina = 1;
var btnAnterior = document.getElementById('btnAnterior');
var btnSiguiente = document.getElementById('btnSiguiente'); //Paginacion

btnSiguiente.addEventListener('click', function () {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  } else {}
});
btnAnterior.addEventListener('click', function () {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});

var cargarPeliculas = function cargarPeliculas() {
  var respuesta, data, peliculas;
  return regeneratorRuntime.async(function cargarPeliculas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/popular?api_key=32a04fc3454375727ea7a6d263ebb594&language=es-ES&page=".concat(pagina)));

        case 3:
          respuesta = _context.sent;

          if (!(respuesta.status === 200)) {
            _context.next = 12;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(respuesta.json());

        case 7:
          data = _context.sent;
          peliculas = '';
          data.results.forEach(function (pelicula) {
            peliculas += "\n            <a href=\"#\" >\n                <div \n                    data-etiqueta=\"".concat(pelicula.title, "\" \n                    class=\"pelicula\">\n                    <img src=\"https://image.tmdb.org/t/p/w500/").concat(pelicula.poster_path, "\" alt=\"").concat(pelicula.title, "\">\n                    <h3 class=\"title\">").concat(pelicula.title, "</h3>\n                </div>\n            </a>");
            document.getElementById('contenedor').innerHTML = peliculas;
          });
          _context.next = 13;
          break;

        case 12:
          //! Si la respuesta no es correcta, entonces...
          if (respuesta.status === 401) {
            console.log('Revisa tu consulta');
          } //*! Si la respuesta no es encontrada, entonces...
          else if (respuesta.status === 404) {
              console.log('No encontrado');
            } //*! Si en la respuesta hubo un error desconocido, entonces...
            else {
                console.log('Algo salio mal, no sabemos que');
              }

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.log("Error: ".concat(_context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};
/* SECOND CODE */
// loaded-images


cargarPeliculas();