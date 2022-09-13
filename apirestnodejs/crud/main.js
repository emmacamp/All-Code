
const url = 'http://localhost:3000/api/articulos/';
const contenedor = document.querySelector('tbody');
let resultados = '';

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formulario = document.querySelector('form');
const description = document.querySelector('#description');
const price = document.querySelector('#price');
const stock = document.querySelector('#stock');
let opcion = '';

btnCrear.addEventListener('click', () => {
    description.value = '';
    price.value = '';
    stock.value = '';
    modalArticulo.show();
    opcion = 'crear';
});


const mostrar = (articulos) =>{
    articulos.forEach(articulo => {
        resultados += `<tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.description}</td>
                            <td>${articulo.price}</td>
                            <td>${articulo.stock}</td>
                            <td class="text-center">
                                <a class="btnEditar btn btn-primary">Editar</a>
                                <a class="btnBorrar btn btn-danger">Eliminar</a> 
                            </td>
                        </tr>`
    });
    contenedor.innerHTML = resultados;
}

//Procedimientos Mostrar
fetch(url).then(response => response.json())
.then(data => mostrar(data))
.catch(error => console.log(error));



const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        if(e.target.matches(selector)){
            handler(e);
        }
    });
}
//Procedimientos Borrar
on(document, 'click', '.btnBorrar', (e) => {
    //Obteniendo la fila del articulo
    const row = e.target.parentNode.parentNode;
    //obteniendo el id del articulo
    const id = row.firstElementChild.innerHTML;

    //Alerta de confirmacion
    alertify.confirm("¿Está seguro que desea eliminar este articulo?",
    function(){
        fetch(url + id, {method: 'DELETE'})
        .then(response => response.json())
        .then(() => location.reload())
        alertify.success('Articulo eliminado');
    },
    function(){
        alertify.error('Articulo no eliminado');
    });


    
});

//Procedimientos Editar
let idForm = 0;
on(document, 'click', '.btnEditar', (e) => {
    const row = e.target.parentNode.parentNode;
    idForm = row.children[0].innerHTML;
    const descriptionForm = row.children[1].innerHTML;
    const priceForm = row.children[2].innerHTML;
    const stockForm = row.children[3].innerHTML;
    description.value = descriptionForm;
    price.value = priceForm;
    stock.value = stockForm;
    opcion = 'editar';
    modalArticulo.show();

});

//Procedimientos Crear y Editar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //const data = {description:description.value, price:price.value, stock:stock.value};
    if(opcion == 'crear'){
        fetch(url, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description:description.value, 
                price:price.value, 
                stock:stock.value
            })
           
        })
        .then(response => response.json())
        .then(response => location.reload())
        alertify.success('Articulo agregado');
    }

    if(opcion == 'editar'){
        fetch(url + idForm, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description:description.value, 
                price:price.value, 
                stock:stock.value
            })
           
        })
        .then(response => response.json())
        .then(response => location.reload())
        alertify.success('Articulo actualizado');
    }

    modalArticulo.hide();
});