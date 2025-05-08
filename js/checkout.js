//Enlazarnos con los elementos HTML (DOM) para generar interaccion
const tableBody = document.getElementById("tableBody")
const totalPrice = document.getElementById("totalPrice")
const btnVolver = document.getElementById("btnReturn")
const btnComprar = document.getElementById("btnBuy")

//Nos armamos un carrito modelos, con productos pre-cargados (traer productos desde index.html)
const carrito = [
    { id: "2", imagen: "🍎", nombre: "Manzana roja", precio: 1890, cantidad: 1, categoria: "Fruta" },
    { id: "6", imagen: "🍅", nombre: "Tomates", precio: 940,  cantidad: 3, categoria: "Fruta" },
    { id: "10", imagen: "🫐", nombre: "Arándanos", precio: 650,  cantidad: 2, categoria: "Fruta" },
    { id: "14", imagen: "🍒", nombre: "Cerezas", precio: 1100,  cantidad: 5, categoria: "Fruta" }
]


//Funcion que retorne la fila HTML dinámica
//toLocaleString lee la configuracion del SO
function crearFilaHTML(producto){
    return `<tr>
                <td id="pImagen">${producto.imagen}</td>
                <td id="nombre">${producto.nombre}</td>
                <td id="price">$ ${producto.precio.toLocaleString()}</td>
                <td id="delButton" class="delete-button"
                    data-codigo="${producto.id}" 
                    title="Clic para eliminar">
                    ❌
                </td>
            </tr>`
}


// function calcularTotalCarrito(){
//     let totalCarrito = carrito.reduce((acc, producto) => acc + producto.precio, 0)
//     totalPrice.textContent = "$ " + totalCarrito.toLocaleString()
// }

function calcularTotalCarrito(){
    let totalCarrito = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    return "$ " + totalCarrito.toLocaleString()
}


//Funcion que cargue el carrito de productos en pantalla
function cargarCarritoDeCompras(){
    //debugger

    if(carrito.length > 0){
        tableBody.innerHTML=""
        carrito.forEach((producto)=>{
            tableBody.innerHTML += crearFilaHTML(producto)
        })
        totalPrice.textContent = calcularTotalCarrito()
        //btnComprar.setAttribute("atributo", "valor")

        //Habilita el boton comprar al quitar el atributo disabled
        btnComprar.removeAttribute("disabled")

        activarClickBotonesEliminar()
    }else{
        location.href = "index.html"
    }
}

//Funcion que valida si hay productos en el carrito, sino hay redireccionar a index.html
function validarCarritoVacio(){
    if(carrito.length === 0){
        location.href = "index.html"
    }
}


//EVENTOS
btnVolver.addEventListener("click", ()=>{
    location.href = "index.html"
})
//Another option is history.back() but that may not always work if the user navigated using the direct URL


btnComprar.addEventListener("click", ()=>{
    console.log("Compra finalizada, muchas gracias por elegirnos")
    btnComprar.setAttribute("disabled", "true")
    carrito.length = 0
    setTimeout(()=> location.href = "index.html", 4000)
})





//TODO: Definir eventos de btnComprar y btnVolver
//TODO: Definir una funcion que active evento click en quitar producto del carrito
function activarClickBotonesEliminar(){
    const botonesEliminar = document.querySelectorAll("td#delButton")
    botonesEliminar.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            //debugger
            let indice = carrito.findIndex((producto) => producto.id === boton.dataset.codigo)
            carrito.splice(indice, 1)
            cargarCarritoDeCompras()

        })
    })
    //return botonesEliminar
}


//TODO: btnComprar: simular la finalizacion de la compra, vaciar carrito, retornar a index.html
//TODO: Ver LocalStorage y SessionStorage (mecanismos de almacenamiento local)
//TODO: Objeto global JSON - nativo de JS - que permite convertir objectos a string i visceversa
//TODO: ELiminar productos del carrito previo a finalizar la compra
//TODO: Modificar el carrito para permitir cargar multiples producto en un unico registro (precio * cantidad)



//FUNCION PRINCIPAL
cargarCarritoDeCompras()

