//API para generar Random Users:
//https://api.randomuser.me/

//VARIABLES GLOBALES

/*
var anio = 2025
let nombre = '  Luis Enrique     '
let cursoIniciado = true // false
const PI = 3.141594546

let empresa = 'Educacion IT'

const persona = { // Objeto literal (Diccionario)
    nombre: 'Fer',
    edad: 50,
    profesion: 'Profe'
}

const paises = ['Argentina', 'Chile', 'Uruguay', 'Perú', 'Venezuela'] // array

const paisesNorte = ['Mexico', 'USA', 'Canada'] // array


const titulo = document.getElementById('titulo');

*/

/*
let testVar = persona

if(Array.isArray(testVar)){
    for (x of testVar){
        console.log(x)
    }
}else{
    console.warn('No es un array válido');
}
    */

/*
console.log(nombre.toLowerCase())
console.log(nombre.toUpperCase())
console.log(nombre.charAt(2))
console.log(nombre.at(2))
console.log(nombre.trim())
console.log(nombre.replace('i', 'X'))
console.log(nombre.replaceAll('i', 'X'))
console.log(nombre.includes('Luis'))

console.log('---------------------------------')
console.log(anio.toPrecision(8))
console.log(anio.toPrecision(3))

console.log(PI.toFixed(2))
console.log(PI.toLocaleString())
console.log(PI.toString())
*/


/*
-Definir acciones especificas
-Nombre en formato camelCase
-Su nombre debe expresar una accion
Deben realizar una sola acción
*/


/*

//Funcion convencional
function listarPaises(){

    

    for( let pais of paises) { 
        console.log(pais)
    }
}

//Funcion con parametros = dan dinamismo
function listarPaises2(listado){

    //debugger
    //For convencional
    
    //for(let i=0; i<listado.length; i++){
      //  console.log(listado[i])
    //}

    for( pais of listado) { //For of (i.e. simplificacion del for convencional o tambien conocido como Syntactic Sugar)
        console.log(pais)
    }
}


function mostrarSaludo(nombre = 'invitado'){
    return 'Hola '+ nombre
}

//Funciones anonimas o Lambda
const multiplicarNumeros = function(a, b){
    return a * b;
}

const multiplicarNumeros2 = (a, b) => a * b


//Ejemplo de uso de funcion anonima
const producto = {
    nombre: 'Notebook',
    precio: 1200,
    stock: 20,
    precioFinal: function() {
        return this.precio * 1.21
    }
}

const sumarNumeros = ()=> { //Arrow function - funcion flecha

}


//titulo.addEventListener('click', function(){
  //  alert('Hola mundo')
//})


titulo.addEventListener('click', ()=>{
    alert('Hola mundo')
})



listarPaises()
console.log('---------------------')
listarPaises2(paisesNorte)

*/

//INICIA CODIGO DE LA CLASE 3
//################### IMPORTAR UTILIDADES #######################
import {urlProductos, arrayCategorias, recuperarCarrito, mostrarMensaje,
        guardarCarrito} from "./utils.js"

//################### VARIABLES GLOBALES - ACCESOS AL DOM ###################
const divContainer = document.querySelector("#container")
const divCategories = document.querySelector("#categories")
const btnCheckout = document.querySelector("#botonCheckout")
const inputSearch = document.querySelector("#inputSearch")
const arrowUp = document.querySelector('div#arrow-up')
const productos = []




const carrito = recuperarCarrito()




//################### EVENTOS ###################
/*
btnCheckout.onclick = function() {
    console.log('Ir a la pagina  checkout')
}
*/

/*
btnCheckout.addEventListener("click", function(){
    console.log('Ir a la pagina  checkout') 
})
*/

btnCheckout.addEventListener("click", () => {
    carrito.length > 0 ? location.href = "checkout.html"
                       : console.warn("Carga al menos un producto en el carrito")
})

btnCheckout.addEventListener("mousemove", () => {
    btnCheckout.title = carrito.length > 0 ? "Productos en carrito: "+ carrito.length 
                                           : "Sin productos en carrito"
})

/*
inputSearch.addEventListener("input", () => {
    console.clear()
    console.log(inputSearch.value)
})
    */

//Solo disponible para navegadores web tipo Blink (chronium)
// inputSearch.addEventListener("search", (event) => {
//     let param = inputSearch.value.trim().toLowerCase()
//     let filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(param))
//     cargarProductos(filtrado)

//     if(filtrado.length > 0){
//         cargarProductos(filtrado)
//     }else{
//         //TODO: Libreria JS tipo Toast o alter()
//         console.warn("No se encontraron resultados") //Notificar por pantalla al usuario
//         cargarProductos(productos)

//     }

// })

inputSearch.addEventListener("input", (event) => {
    //console.log(event.key)
    event.target.value.trim() === "" && cargarProductos(productos)
    /*
    if(event.target.value.trim() === ""){ //si esta vacio, entonces se limpió la caja de busqueda con la X
        cargarProductos(productos) // vuelve a llamar a cargarProductos con el array completo
    }
    */
})

inputSearch.addEventListener("keypress", (event) => {
    //console.log(event)
    if(event.key === "Enter" && inputSearch.value.trim() !== ""){
        //debugger
        console.log("Ejecutar el método de búsqueda: "+ inputSearch.value)
        let param = inputSearch.value.trim().toLowerCase()
        let filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(param))
        cargarProductos(filtrado)

        if(filtrado.length > 0){
            cargarProductos(filtrado)
        }else{
            //TODO: Libreria JS tipo Toast o alter()
            console.warn("No se encontraron resultados") //Notificar por pantalla al usuario

        }
    
    }

})

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    scrollY > 600 ? arrowUp.classList.remove('hide-arrow') 
                  : arrowUp.classList.add('hide-arrow')
})


arrowUp.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

//################### FUNCIONES DE LOGICA ###################

function crearSpanCategoria(cat){
    return `<span class="category">${cat}</span>`
}

function activarClicksEnCategorias(){

}

//Crea elementos como el siguiente: <span class="category">Todos</span>
function cargarCategorias(){

    //debugger

    if(arrayCategorias.length > 0){

        arrayCategorias.forEach((categoria) => {
            //console.log(categoria)
            const spanCategoria = document.createElement("span")
            spanCategoria.innerText = categoria
            //spanCategoria.className = "category"
            spanCategoria.classList.add("category")

            spanCategoria.addEventListener("click", ()=>{

                if(categoria === "Todos"){
                    cargarProductos(productos)
                }else{
                    let productosFiltrados = productos.filter((producto) => producto.categoria === categoria)
                    cargarProductos(productosFiltrados)
                }
                
            })

            //Definir evento click
            /*
            spanCategoria.onclick = function(){
                console.log('Seleccionaste la categoria: '+categoria)
                //Filtrar por los productos de la categoría seleccionada
            }
            */
            divCategories.appendChild(spanCategoria)
        })
    }else{
        divCategories.innerHTML = crearMensajeErrorCategorias()
    }
    
}


function crearMensajeErrorCategorias(){
    return `<p class="categories-warning">⚠️ Error al cargar las categorias</p>`
}

//Template literal un cuando se usa el backtick `
function crearCardHTML(prod){
    //const prod = { id: "1", imagen: "🍌", nombre: "Bananas", precio: 1220, categoria: "Fruta" },
    //prod.imagen


    //Template String = Plantilla de texto
    //Template literal = cuando se usan `${}`
    return `<div class="card">
                <div class="product-image">${prod.imagen}</div>
                <div class="product-name">${prod.nombre}</div>
                <div class="product-price">$ ${prod.precio}</div>
                <div class="buy-button">
                    <button data-codigo="${prod.id}" id="buttonComprar">COMPRAR</button>
                </div>
            </div>`
}

function crearCardErrorHTML(){
    return `<div class="card-error">
                    <div class="error-title">
                        <h3>Se ha producido un error inesperado.</h3>
                        <div class="emoji-error">🔌</div>
                        <h4>Por favor, intenta acceder nuevamente en unos instantes.</h4>
                        <p>No estamos pudiendo cargar el listado de productos para tu compra.</p>
                        <div class="emoji-error">
                            <span>🥑</span>
                            <span>🍉</span>
                            <span>🍋‍🟩</span>
                            <span>🍏</span>
                        </div>
                    </div>
                </div>`
}


function crearCategoriaHTML(cat){
    return `<div class="categoria-title">
                <p>${cat}</p>
            </div>`
}


// function obtenerProductos(){
//     fetch(urlProductos)
//         .then((response) => {
//             if(response.status === 200) return response.json()
//             else throw new Error(`No se han podido obtener los productos ${response.status}`)
//         } )
//         .then((data) => productos.push(...data))
//         .then(() => cargarProductos(productos))
//         .catch((error) => {
//             divContainer.innerHTML = crearCardErrorHTML()
//         })
// }


//ASYNC - AWAIT
async function obtenerProductos(){
    try{
        const response = await fetch(urlProductos)
        if(response.status === 200){
            const data = await response.json()
            productos.push(...data)
            cargarProductos(productos)
            //cargarProductosPorCategoria(productos)
            //listarProductosAgrupados()
        }else{
            throw new Error('Error al obtener los productos')
        }
    }catch(error){
        divContainer.innerHTML = crearCardErrorHTML()
    }
    
}

function cargarProductosPorCategoria(array){
    divCategories.classList.add(".hide-arrow")
    const productosAgrupados = Object.groupBy(array, (prod) => prod.categoria)
    divContainer.innerHTML = ""
    for (let categoria in productosAgrupados){
        divContainer.innerHTML += crearCategoriaHTML(categoria)
        productosAgrupados[categoria].forEach((prod) => {
            divContainer.innerHTML += crearCardHTML(prod)
        })
    }
}

function cargarProductos(array){
    if(array.length > 0){
        divContainer.innerHTML = ""

        /*
        for(let i = 0; i < array.length; i++){
            divContainer.innerHTML += crearCardHTML(array[i])
        }*/

        /* for( let producto of array){
            divContainer.innerHTML += crearCardHTML(producto)
        }*/

        array.forEach(producto => divContainer.innerHTML += crearCardHTML(producto));

        //Se recomienda que cuando se tengan que recorrer arrays se use el forEach (y no)
        //porque JS lo optimizó

        activarClicksBtnComprar()
    }
}

function aplicarAnimacionEnCheckout(){
    btnCheckout.classList.add("girar-trompo")
    btnCheckout.addEventListener("animationend", () => btnCheckout.classList.remove("girar-trompo"))
}


function activarClicksBtnComprar(){
    const botonesComprar = document.querySelectorAll("button#buttonComprar")
    
    if(botonesComprar.length > 0){
        botonesComprar.forEach((botonComprar) => {
            botonComprar.addEventListener("click", () => {
                //console.log(botonComprar.dataset.codigo)
                let productoParaCarrito = productos.find((producto) => producto.id === botonComprar.dataset.codigo)
                carrito.push(productoParaCarrito)
                guardarCarrito(carrito)
                mostrarMensaje(`'${productoParaCarrito.nombre}' agregado`,'success', 2500)
                aplicarAnimacionEnCheckout()
                console.clear()
                console.table(carrito)
            })
        })
    }
}

function listarProductosAgrupados(){
    const productosAgrupados = Object.groupBy(productos, (prod) => prod.categoria)
    console.log(productosAgrupados)

    for (let categoria in productosAgrupados){
        console.log(categoria)
        console.table(productosAgrupados[categoria])
    }
}

/*
estatico.addEventListener("click", function(){
    let dinamico = document.createElement("button")
    dinamico.innerText = "dinamico"
    dinamico.id = "dinamico"
    document.body.appendChild(dinamico)
})
*/


/*
    1999: OBJETO LITERAL
    2009: FUNCIONES CONSTRUCTORAS
    2015: CLASES JS (basadas en método constructor)

*/
// OBJETO LITERAL
// const Persona = {
//     nombre: 'Fer',
//     genero: 'Masculino',
//     fechaNacimiento: '1975-03-21',
//     profesion: 'Profe',

//     calcularEdad: function() {
//         let anioActual = new Date().getFullYear()
//         let anioNac = this.fechaNacimiento.split("-")
//         let edad = anioActual - parseInt(anioNac[0])
//         return edad
//     }
// }

// FUNCIONES CONSTRUCTORAS
function Persona(nombre, genero, fn, profesion) {
    this.nombre = nombre
    this.genero = genero
    this.fechaNacimiento = fn
    this.profesion = profesion

    this.calcularEdad = function() {
        let anioActual = new Date().getFullYear()
        let anioNac = this.fechaNacimiento.split("-")
        let edad = anioActual - parseInt(anioNac[0])
        return edad
    }

    this.retornarNombreYProfesion = function() {
        return `${this.nombre} - ${this.profesion}`
    }
}


// CLASES JS BASADAS EN MÉTODO CONSTRUCTOR
class Producto {
    constructor(nombre, precio, categoria, imagen) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.imagen = imagen
    }

    retornarPrecioConIVA() {
        return this.precio * 1.21
    }

    retornarNombreMayus() {
        return this.nombre.toUpperCase()
    }

    calcularDescuento10() {
        return this.precio * 0.9
    }

    static about() {
        console.log('Copyright 2025 - Educación IT - JS Avanzado.')
    }

    #categorias = ['Portátiles', 'Smartphones', 'Electro', 'Línea Blanca']

    getCategorias() {
        return this.#categorias
    }
}

const arrayProductos = []
arrayProductos.push(new Producto('Notebook i7', 1100, 'Portátil', '💻'))
arrayProductos.push(new Producto('Smart TV', 500, 'TV', '📺'))



// document.addEventListener("scroll", () => {
//     const scrollY = window.scrollY
//     scrollY > 600 ? addClass
// })



//FUNCION PRINCIPAL
cargarCategorias()
//cargarProductos(productos)
obtenerProductos(productos)



//document.appendChild(crearCardHTML())

