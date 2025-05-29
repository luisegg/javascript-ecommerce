export const urlProductos = "https://681c21a96ae7c794cf70c313.mockapi.io/productos"

export const arrayCategorias = ["Todos", "Fruta", "Verdura", "Comida", "Bebida"]

//Nos armamos un carrito modelos, con productos pre-cargados (traer productos desde index.html)
export function recuperarCarrito() {
    const carritoTemporal = JSON.parse(localStorage.getItem("carrito"))
    
    if (carritoTemporal === null) {
        return []
    } else {
        return carritoTemporal
    }
}