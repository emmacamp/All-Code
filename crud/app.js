class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
       <div class="card text-center mb-4">
         <div  class="card-body">
         <strong>Producto </strong>: ${product.name}
         <strong>Precio S/.</strong>: ${product.price}
         <strong>Fecha </strong>: ${product.year}
         <a href="#" class="btn btn-primary" name="delete"> Delete </a>
         </div>
       </div>
      `;
    productList.appendChild(element);
  }


  resetForm() {
    document.getElementById("products-form").reset();
  }


  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Producto eliminado satisfactoriamente", "info");
    }
  }


  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));
    //showing in dom
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//DOM events
document.getElementById("products-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;
  console.log(name, year, price);

  const product = new Product(name, price, year);

  const ui = new UI();
  if (name === "" || price === "" || year === "") {
    return ui.showMessage("Por favor complete todos los campos", "danger");
  }

  ui.addProduct(product);
  ui.resetForm();
  ui.showMessage("Producto agregado satisfactoriamente", "success");
});

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
