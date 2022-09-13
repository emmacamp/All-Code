//Referenciamos elementos del DOM

const inputBuscar = document.getElementById('buscar')
const celdas = document.getElementsByTagName('td')

//Datos de la API

let uri = 'https://jsonplaceholder.typicode.com/users'
fetch(uri)
    .then( response => response.json() )
    .then( json => mostrarDatos(json) )
    .catch( e => console.log(e) )

const mostrarDatos = (data) => {
    console.log(data)
    let body = ''
    for(let i = 0; i < data.length; i++){
        body += `
        <tr>
            <td>${data[i].name}</td>
        </tr>
    `}
    document.querySelector('.datos').innerHTML = body    
    
}


//Busqueda

inputBuscar.addEventListener('keyup', (e) => {
    let busqueda = e.target.value.toLowerCase()
    for(let i = 0; i < celdas.length; i++){
        let texto = celdas[i].innerText.toLowerCase()
        if(texto.indexOf(busqueda) > -1){
            celdas[i].parentElement.style.display = 'table-row'
        }else{
            celdas[i].parentElement.style.display = 'none'
        }
    }
})