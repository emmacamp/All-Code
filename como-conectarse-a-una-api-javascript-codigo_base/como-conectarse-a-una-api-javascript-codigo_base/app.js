


let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');


//Paginacion
btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
    pagina += 1;
    cargarPeliculas();
    }else{

    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1
        cargarPeliculas();
    }
});
const cargarPeliculas = async () => {

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=32a04fc3454375727ea7a6d263ebb594&language=es-ES&page=${pagina}`);
        /* console.log(respuesta); */

        // Si la respuesta es correcta, entonces...
        if(respuesta.status === 200){
        const data = await respuesta.json();

        let peliculas = '';
        data.results.forEach(pelicula => {

            peliculas += `
            <a href="#" >
                <div 
                    data-etiqueta="${pelicula.title}" 
                    class="pelicula">
                    <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
                    <h3 class="title">${pelicula.title}</h3>
                </div>
            </a>`;
            document.getElementById('contenedor').innerHTML = peliculas;
        
        });     
    }
         //! Si la respuesta no es correcta, entonces...
        else if(respuesta.status === 401){
            console.log('Revisa tu consulta');
        }
        //*! Si la respuesta no es encontrada, entonces...
        else if(respuesta.status === 404){
            console.log('No encontrado');
        }
        //*! Si en la respuesta hubo un error desconocido, entonces...
        else{
            console.log('Algo salio mal, no sabemos que');
        } 

    // !Si la respuesta no es correcta, entonces...
    }catch(error){
        console.log(`Error: ${error}`);
    }
  
}

/* SECOND CODE */


// loaded-images
cargarPeliculas();