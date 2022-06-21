let carrito = JSON.parse(localStorage.getItem("carrito"));

let cardBody = document.querySelector(".card-body");

function putTotalCart(arrayCarrito) {
    const totalHtml = document.getElementById("anchor_strong");

    let total = arrayCarrito.reduce((a, b) => {
        return a + Number(b.subtotal)
    }, 0)
    totalHtml.innerText = `$${total}
    `
}

function rellenarCarrito(arrayCarrito) {

    if (carrito.length >= 1) {

        title = document.getElementById("cartTitle")
        empty = document.getElementById("emptyCartImg")
        empty.classList.add("d-none")
        title.classList.add("d-none")

        for (let producto of arrayCarrito) {

            let row = document.createElement("div");
            row.innerHTML = `   

            <div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src="${producto.imagen}" class="w-100" alt="${producto.id}" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)">
                        </div>
                    </a>
                </div>
                <!-- Image -->
            </div>
        
            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>${producto.nombre}</strong></p>
                <p>Descripción:${producto.descripcion}</p>
                <p>Precio: <strong>$${producto.precio}</strong></p>
                <p>Subtotal: <strong>$${producto.subtotal}</strong></p>
                <button id="${producto.id}" type="button" class="btn btn-primary btn-sm me-1 mb-2 remove eliminarProducto"
                    data-mdb-toggle="tooltip" title="Remove item">
                    <i class="fas fa-trash"></i>
                    <!-- Data -->
            </div>
        
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <!-- Quantity -->
                <div class="d-flex mb-4" style="max-width: 300px">
                    <button id="${producto.id}" class="btn btn-primary px-3 me-2 minus restarProducto">
                        <i class="fas fa-minus"></i>
                    </button>
        
                    <div class="form-outline">
                        <input id="form1" min="1" name="quantity" value="${producto.cantidad}" type="text"
                            class="form-control" />
                        <label class="form-label" for="form1">Cantidad</label>
                    </div>
                    <button id="${producto.id}" class="btn btn-primary px-3 ms-2 plus sumarProducto">
                        <i class="fas fa-plus"></i>
                    </button>
        
                </div>
                <!-- Quantity -->
        
            </div>
            <hr class="my-4" />
        </div>
    
    `
            cardBody.appendChild(row);
        }
        putTotalCart(carrito)

    } else {

        title = document.getElementById("cartTitle")
        empty = document.getElementById("emptyCartImg")
        sectionCart = document.getElementById("sectionCart")
        
        empty.classList.remove("d-none")
        title.classList.remove("d-none")
        sectionCart.classList.add("d-none")
    }
    getDate()
}

rellenarCarrito(carrito);

function eliminarProducto(e) {

    let index = carrito.findIndex(producto => producto.id == e.currentTarget.id)
    
    carrito.splice(index, 1);
    //console.log(e.target.parentNode.parentNode.children[2])Finder

    e.currentTarget.parentNode.parentNode.parentNode.remove();

    localStorage.setItem("carrito", JSON.stringify(carrito));

    Toastify({
        text: "Producto eliminado del carrito",
        duration: 1000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #F52211, #F59A11)",
        },
        onClick: function () {} // Callback after click
    }).showToast();

    putTotalCart(carrito)
    textSCart(carrito)

    if (carrito.length <= 0) {
        title = document.getElementById("cartTitle")
        empty = document.getElementById("emptyCartImg")
        empty.classList.remove("d-none")
        title.classList.remove("d-none")

        sectionCart = document.getElementById("sectionCart")
        sectionCart.classList.add("d-none")

    }
}

function textSCart(arrayCarrito) {

    let subtextoCarrito = document.getElementById("cartS");
    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    subtextoCarrito.innerHTML = "";
    subtextoCarrito.innerHTML = `${totalProductos} `
}
textSCart(carrito)

function getDate() {
    var DateTime = luxon.DateTime;
    const now = DateTime.local().setLocale('sp')

    const weekAdd = now.plus({
        days: 10
    }).toFormat("EEEE ' 'd' 'MMMM' de'");


    document.getElementById('date2').innerHTML = weekAdd

}

let botonesEliminar = document.querySelectorAll(".eliminarProducto");
let botonesSumar = document.querySelectorAll(".sumarProducto")
let botonesRestar = document.querySelectorAll(".restarProducto")

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

botonesSumar.forEach(elemento => {
    elemento.addEventListener("click", sumarProducto)
})

botonesRestar.forEach(elemento => {
    elemento.addEventListener("click", restarProducto)
})

function sumarProducto(e) {
    let index = carrito.findIndex(producto => producto.id == e.currentTarget.id)

    carrito[index].cantidad++
    carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));

    putTotalCart(carrito)
    textSCart(carrito)
    location.reload();
}

function restarProducto(e) {
    let index = carrito.findIndex(producto => producto.id == e.currentTarget.id)

    if (carrito[index].cantidad >= 1 && carrito[index].cantidad > 1) {

        carrito[index].cantidad--
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;

        localStorage.setItem("carrito", JSON.stringify(carrito));
        putTotalCart(carrito)
        textSCart(carrito)
        location.reload()

    } else if (carrito.length == 0) {

        let index = carrito.findIndex(producto => producto.id == e.currentTarget.id)
        carrito.splice(index, 1)
        local
        e.currentTarget.parentNode.parentNode.parentNode.remove();

        localStorage.setItem("carrito", JSON.stringify(carrito));


    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            confirmButtonColor: "#f27474",
            text: 'La cantidad del producto no puede ser menor a 1 unidad.',
            footer: 'Si no desea el producto, pruebe eliminándolo.'
        })
    }



}
