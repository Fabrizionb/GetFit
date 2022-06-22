// Setear carrito
let carrito = [];

let total = 0;

// Constructor
class ProductoCarrito {
    constructor(nombre,precio,imagen,id, descripcion, subtotal ) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
        this.cantidad = 1;
        this.descripcion = descripcion;
        this.subtotal = precio;
    }
}

//Obtener container
let divContainer = document.getElementById("row");

// Rellenar tienda
function rellenarPagina(arrayProductos) {

    for (let producto of arrayProductos) {
        let div = document.createElement("div");
        div.classList = "col-lg-4 col-md-12 mb-4 box"

        div.innerHTML = `
                                    <div>
                                        <!-- Card -->
                                        <div class="card card-ecommerce">
                                            <!-- Card image -->
                                            <div class="view overlay">
                                                <img src="${producto.imagen}" class="img-fluid" alt="${producto.id}">
                                                <a>
                                                    <div class="mask rgba-white-slight waves-effect waves-light"></div>
                                                </a>
                                            </div>
                                            <!-- Card image -->
                                            <!-- Card content -->
                                            <div class="card-body">
                                                <!-- Category & Title -->
                                                <h5 class="card-title mb-1"><strong>${producto.nombre}</strong></h5><span
                                                    class="badge badge-danger mb-2">new</span>
                                                <!-- Description -->
                                                <p>${producto.descripcion}</p>
                                                <!-- Card footer -->
                                                <div class="card-footer pb-0">
                                                    <div class="row mb-0 text-center">
                                                        <span class="float-left">Precio: $<strong>${producto.precio}</strong></span>
                                                        <span class="float-right">
                                                        <br>
                                                        <button class="btn  btn-xs anadirCarrito ">Añadir al Carrito</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Card content -->
                                        </div>
                                        <!-- Card -->
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

// Agregar al Carrito
function anadirCarrito(e) {
     //console.log(e.target.parentNode.parentNode.parentNode.parentNode)finder
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLocalStorage) {
        carrito = carritoLocalStorage;
    }

    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].alt);

    let nombre = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent;
    let precio = e.target.parentNode.parentNode.children[0].children[0].textContent;
    let imagen = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
    let id = Number(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].alt);
    let descripcion = e.target.parentNode.parentNode.parentNode.parentNode.children[2].textContent;

    if (index == -1) {
        const producto = new ProductoCarrito(nombre, precio, imagen, id, descripcion);
        carrito.push(producto);
    } else {
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))

    carritoNav(carrito)
    textCart(carrito)
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
    elemento.addEventListener("click", anadirCarrito)
})

// Pintador de total en Navbar
function carritoNav(arrayCarrito) {

    let textoCarrito = document.getElementById("cart");

    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `${totalProductos}`
}