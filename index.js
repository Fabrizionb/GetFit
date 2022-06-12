//ternary
const cartMark =
    localStorage.length === 0 ?
    cart.setAttribute("style", "display: none") :
    cart.textContent = localStorage.length