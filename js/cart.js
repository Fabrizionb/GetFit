const carrito = JSON.parse(localStorage.getItem("carrito"));


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
            <div class="bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light">
                <img src="${producto.imagen}"
                    class="w-100" alt="${producto.id}" />
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
            <p>Subtotal:  <strong>$${producto.subtotal}</strong></p>
            <button class="btn btn-danger eliminarProducto" id="${producto.id}">Eliminar</button>
            <!-- Data -->
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <!-- Quantity -->
            

                <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value="${producto.cantidad}" type="number"
                        class="form-control" />
                    <label class="form-label" for="form1">Cantidad</label>
                </div>

                
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
        empty.classList.remove("d-none")
        title.classList.remove("d-none")

        table = document.getElementById("sectionCart")
        table.classList.add("d-none")
    }
    
    getDate()
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

function eliminarProducto(e) {

    let index = carrito.findIndex(producto => producto.id == e.target.id)

    console.log(index)
    console.log(e.target.parentNode.parentNode.parentNode)

    carrito.splice(index, 1);
    //console.log(e.target.parentNode.parentNode.children[2])

    e.target.parentNode.parentNode.parentNode.remove();

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

function getDate(){
    var DateTime = luxon.DateTime;
    const now = DateTime.local().setLocale('sp')
    
    const weekAdd = now.plus({days: 7}).toFormat("EEEE ' 'd' de' MMMM'");

   
    document.getElementById('date2').innerHTML = weekAdd
    
}
