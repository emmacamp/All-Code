


async function getMovies() {
    
    try {
        let movies = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=32a04fc3454375727ea7a6d263ebb594')
        movies = await movies.json()
        
    } catch (error) {
        console.log(error)
    }

}

fetch('https://api.themoviedb.org/3/movie/popular?api_key=32a04fc3454375727ea7a6d263ebb594')
    .then(response => response.json())
    .then(data => setHtml(data))
    .catch(error => console.log(error))

getMovies()

function setHtml(data) {
    console.log(data)
}































