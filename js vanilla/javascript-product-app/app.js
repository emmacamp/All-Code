class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//USER INTERFACE

class UI {
    //METHOD 
    //show products
    addProduct(product){
        const productList = document.getElementById('product-list'); 
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();


    }
    //reset form
    resetForm(){
        document.getElementById('product-form').reset();
    }

    //clear all products
    deleteProduct(element){
        if(element.name === 'delete'){
            console.log(element.parentElement.parentElement.remove());
        }


    }

    //show alert
    showMessage(){

    }
}

// DOM EVENTS
document.getElementById('product-form')
    .addEventListener('submit', function(e){
        const name  = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        //instantiate product
        const product = new Product(name, price, year);

        //instantiate Uuse Interface
        const ui = new UI().addProduct(product);

        //another way to reset the form
        //ui.resetForm();

        //prevent actual submit
        //This funtion is used to prevent the default behavior of the form
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
   const ui = new UI()
   ui.deleteProduct(e.target);

});