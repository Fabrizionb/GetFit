let carrito =  JSON.parse(localStorage.getItem("carrito"));

let total = 0;

class ProductoCarrito {
    constructor(nombre, precio, imagen, id, subtotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
        this.id = id;
        this.subtotal = precio;
    }
}

let divContainer = document.getElementById("row");

function rellenarPagina(arrayProductos) {

    for (let producto of arrayProductos) {
        let div = document.createElement("div");
        div.classList = "col-md-6 col-lg-3 col-xl-3"

        div.innerHTML = `
                                        <div id="${producto.product}" class="single-product">
                                               <img src="${producto.imagen}" class="card-img-top shop mx-auto d-block" alt="${producto.id}" >
                                                <p class="pFix"> ${producto.nombre}</p>
                                                    <p class="pFix"> ${producto.descripcion}</p>
                                                    <p class="pFix">Precio: $ <strong> ${producto.precio}</strong></p>
                                                    <button class="btn mx-auto d-block  btn-xs anadirCarrito">Añadir al Carrito</button>
                                        </div>
                                                
                                                
        `
        divContainer.appendChild(div)
    }
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if (carritoLocalStorage) {
        carritoNav(carritoLocalStorage);
    }
}

rellenarPagina(productos);

function anadirCarrito(e) {
    //  console.log(e.target.parentNode.children[0].src) //finder
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLocalStorage) {
        carrito = carritoLocalStorage;
    }

   
// Pintar o Despintar el numero de productos
  function cartMark() {
    let cartMark1 = document.getElementById("cart")
    readCarrito = Object.keys(cart).length
    if(readCarrito  >= 0){
        cartMark1.classList.remove("d-none")
    }else {
        cartMark1.classList.add("d-none")
    }
  }
  cartMark()

    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.children[4].alt);

    let nombre = e.target.parentNode.children[1].textContent;
    let precio = e.target.parentNode.children[2].textContent;
    let imagen = e.target.parentNode.children[0].src;
    let id = e.target.parentNode.children[4].alt;

    if (index == -1) {
        const producto = new ProductoCarrito(nombre, precio, imagen, id);
        carrito.push(producto);
    } else {
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }
    carritoNav(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
    Toastify({
        text: "Producto Agregado al Carrito",
        duration: 1000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {} // Callback after click
    }).showToast();

}

let agregar = document.querySelectorAll(".anadirCarrito");

agregar.forEach(elemento => {
    elemento.addEventListener("click touchstart", anadirCarrito)
})
// Escribir la cantidad de productos
function carritoNav(arrayCarrito) {

    let textoCarrito = document.getElementById("cart");
    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `${totalProductos}`
}

function emtpyMark(){
    readCarrito = Object.keys(cart).length
    if (readCarrito < 1){
       
        cartMark2.classList.add("d-none")
        
    }   else {
        
        cartMark2.classList.remove("d-none")
    }
    
}