const cart = JSON.parse(localStorage.getItem("carrito"));

function textCart(arrayCarrito) {
    let textoCarrito = document.getElementById("cart");
    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `${totalProductos}`
}
textCart(cart)