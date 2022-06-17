//Escribir la cantidad de productos en el carrito
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

//Pintar o despintar productos en el carrito
let cartMark2 = document.getElementById("cart")

function emtpyMark (){
    readCarrito = Object.keys(cart).length
    if (readCarrito <= 0){
       
        cartMark2.classList.add("d-none")
        
    }   else {
        
        cartMark2.classList.remove("d-none")
    }
    
}
emtpyMark();