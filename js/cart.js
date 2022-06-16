const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

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
    putTotalCart(carrito)
        
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

function eliminarProducto(e) {

    let index = carrito.findIndex(producto => producto.id == e.target.id)
    
    carrito.splice(index, 1);
    console.log(e.target.parentNode.parentNode.children[2])

     e.target.parentNode.parentNode.remove();

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
        onClick: function(){} // Callback after click
      }).showToast();

      putTotalCart(carrito)
      textCart(carrito)
}

textCart(carrito)

function putTotalCart(arrayCarrito)
{
    const totalHtml = document.getElementById("anchor_strong");
    
    let total = arrayCarrito.reduce((a,b)=> 
    {
        return a + Number(b.subtotal)
    }, 0)
    totalHtml.innerText = `$${total}
    `
}


