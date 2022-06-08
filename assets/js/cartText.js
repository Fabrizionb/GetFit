const cart = JSON.parse(localStorage.getItem("carrito"));

function textCart(arrayCarrito) {

    let textCart = document.getElementById("anchor_carrito");

    let textoCarrito = document.getElementById("anchor_carrito");

    let totalProductos = 0;

    for (let producto of arrayCarrito) {
        totalProductos += producto.cantidad;
    }

    textCart.innerHTML = "";
    textCart.innerHTML = `<p>Carrito(${totalProductos})</p>`
}

textCart(cart);


