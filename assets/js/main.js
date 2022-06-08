let carrito = []
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
                                            <div class="part-1">
                                                <!--<span class="discount">50% off</span>-->
                                            </div>
                                            <div class="part-2">
                                                <ul>
                                                    <button class="btn  btn-xs anadirCarrito">Añadir al Carrito</button>
                                                    <p class="pFix"> ${producto.nombre}</p>
                                                    <p class="pFix">Precio: $ <strong> ${producto.precio}</strong></p>
                                                </ul>
                                                    <h3 class="product-title" style="display:none";>${producto.nombre}</h3>
                                                    <h4 class="product-price" style="display:none";>${producto.precio}</h4>
                                                    <p class="product-price" style="display:none";>${producto.id} </p>
                                                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.id}" style="display:none";>
                                                    <p class="product-price" style="display:none";>${producto.subtotal} </p>
                                            </div>
                                        </div>
                                                
                                                
        `
        divContainer.appendChild(div)
    }
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if (carritoLocalStorage) {
        carritoNav(carritoLocalStorage)
    }
}

rellenarPagina(productos);

function anadirCarrito(e) {
    // console.log(e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[4].alt)
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLocalStorage) {
        carrito = carritoLocalStorage;
    }

    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[4].alt);

    let nombre = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].textContent;
    let precio = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[2].textContent;
    let imagen = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[4].src;
    let id = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[4].alt;

    if (index == -1) {
        const producto = new ProductoCarrito(nombre, precio, imagen, id);
        carrito.push(producto);
    } else {
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    carritoNav(carrito)
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
        onClick: function(){} // Callback after click
      }).showToast();
}

let agregar = document.querySelectorAll(".anadirCarrito");

agregar.forEach(elemento => {
    elemento.addEventListener("click", anadirCarrito)
})

function carritoNav(arrayCarrito) {

    let textoCarrito = document.getElementById("anchor_carrito");

    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>Carrito(${totalProductos})</p>`
}


