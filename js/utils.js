import ToastIt from "./toastitv1.0.min.js"

export const urlProductos = "https://681c21a96ae7c794cf70c313.mockapi.io/productos"
export const arrayCategorias = ["Todos", "Fruta", "Verdura", "Comida", "Bebida"]

//Nos armamos un carrito modelos, con productos pre-cargados (traer productos desde index.html)
export function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

export function mostrarMensaje(mensaje, estilo, timer){
    ToastIt.now({
        message: mensaje,
        style:estilo,
        close: false,
        timer: timer,
        position: ''
        
    })
}

export function guardarCarrito(carrito){
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
}