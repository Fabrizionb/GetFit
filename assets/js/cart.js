const carrito2 = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");


function rellenarCarrito(arrayCarrito) {
    for (let producto of arrayCarrito) {
        // let total = 0;
        // total = producto.subtotal + total /REVISAR
        let row = document.createElement("tr");
        row.innerHTML = `   
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.subtotal}</td>
        <td></td> 
        <td><button class="btn btn-danger eliminarProducto">Eliminar</button></td>`
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
    putTotalCart(carrito2)
    
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
        onClick: function(){} // Callback after click
      }).showToast();
}


function putTotalCart(arrayCarrito)
{
    const totalHtml = document.getElementById("anchor_strong");

    let total = arrayCarrito.reduce((a,b)=> 
    {
        return Number(a) + Number(b.subtotal)
    }, 0)
    totalHtml.innerText = `$${total}
    `
    // class ProductoCarrito extends Array {
    //     sum(key) {
    //         return this.reduce((a, b) => a + (b[key] || 0), 0);
    //     }
    // }
    // let money = new ProductoCarrito(...carrito2);
    // totalHtml.innerText = `$${money.sum('subtotal')}`   ;
}


