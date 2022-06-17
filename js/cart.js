const carrito2 = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

let emptyCart = document.getElementById("emptyCartImg")
let fullCart = document.getElementById("sectionTable")
let cartMark = document.getElementById("cart")
let cartTitle = document.getElementById("cartTitle")

emtpyImg();
function emtpyImg (){
    readCarrito = Object.keys(carrito2).length
    if (readCarrito < 1){
        fullCart.classList.add("d-none")//sectionTable
        cartMark.classList.add("d-none")//cart
        emptyCart.classList.remove("d-none")
        cartTitle.classList.remove("d-none")//cartTitle
        
    }   else {
        emptyCart.classList.add("d-none")//emptyCartImg
        cartTitle.classList.add ("d-none")//cartTitle
        fullCart.classList.remove("d-none")//sectionTable
        cartMark.classList.remove("d-none")//cart
    }
}


function rellenarCarrito(arrayCarrito) {
    
    for (let producto of arrayCarrito) {
        let row = document.createElement("tr");
        row.innerHTML = `   
        <thead>
    <tr>
        <th>${producto.nombre}</th>
        <th>${producto.precio}</th>
        <th>${producto.cantidad}</th>
        <th>${producto.subtotal}</th>
    </tr>
    </thead>
        <td><button class="btn btn-danger eliminarProducto" id="${producto.id}">Eliminar</button></td>`
        tbody.appendChild(row);
    }
    putTotalCart(carrito2)
    
}


rellenarCarrito(carrito2);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

function eliminarProducto(e) {

    let index = carrito2.findIndex(producto => producto.id == e.target.id)
    
    carrito2.splice(index, 1);

    e.target.parentNode.parentNode.remove();

    localStorage.setItem("carrito", JSON.stringify(carrito2));
    textCart(carrito2)
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
;
    putTotalCart(carrito2);
    emtpyImg();
}

textCart(carrito2)

function putTotalCart(arrayCarrito) {
    const totalHtml = document.getElementById("anchor_strong");

    let total = arrayCarrito.reduce((a, b) => {
        return a + Number(b.subtotal)
    }, 0)
    totalHtml.innerText = `$${total}
    `
}