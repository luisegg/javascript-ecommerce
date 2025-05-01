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



//################### VARIABLES GLOBALES - ACCESOS AL DOM ###################
const carrito = []

const divContainer = document.getElementById("container")
const divCategories = document.getElementById("categories")
const btnCheckout = document.getElementById("botonCheckout")

const inputSearch = document.getElementById("inputSearch")

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
    //console.log('Ir a la pagina  checkout') 
    if(carrito.length > 0 ){
        location.href = "checkout.html"
    }else{
        console.warn("Carga al menos un producto en el carrito")
    }
})

btnCheckout.addEventListener("mousemove", () => {
    if(carrito.length > 0) {
        btnCheckout.title = "Productos en carrito: "+ carrito.length
    }else{
        btnCheckout.title = "Sin productos en carrito"
    }
})

/*
inputSearch.addEventListener("input", () => {
    console.clear()
    console.log(inputSearch.value)
})
    */

inputSearch.addEventListener("keypress", (event) => {
    //console.log(event)
    if(event.key === "Enter" && inputSearch.value.trim() !== ""){
        //debugger
        console.log("Ejecutar el método de búsqueda: "+ inputSearch.value)
        let param = inputSearch.value.trim().toLowerCase()
        let filtrado = productos.filter((producto) => producto.nombre.toLowerCase().includes(param))
        cargarProductos(filtrado)

    
    }

})

//################### FUNCIONES DE LOGICA ###################


function cargarCategoriasProductos(){
    if(arrayCategorias.length > 0){
        divCategories.innerHTML = ""
        for (let categoria of arrayCategorias){
            divCategories.innerHTML += crearSpanCategoria(categoria)
        }
    }
}

function crearSpanCategoria(cat){
    return `<span class="category">${cat}</span>`
}

function activarClicksEnCategorias(){

}

//Crea elementos como el siguiente: <span class="category">Todos</span>
function cargarCategorias(){

    //debugger

    if(arrayCategorias.length > 0){
        for( let categoria of arrayCategorias){
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
        }
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

function cargarProductos(array){

    //debugger

    if(array.length > 0){
        divContainer.innerHTML = ""

        /*
        for(let i = 0; i < array.length; i++){
            divContainer.innerHTML += crearCardHTML(array[i])
        }*/

        /* for( let producto of array){
            divContainer.innerHTML += crearCardHTML(producto)
        }*/

        array.forEach(producto => {
            divContainer.innerHTML += crearCardHTML(producto)
        });

        //Se recomienda que cuando se tengan que recorrer arrays se use el forEach
        //porque JS lo optimizó

        activarClicksBtnComprar()
    }else{
        divContainer.innerHTML = crearCardErrorHTML()
    }
}

function activarClicksBtnComprar(){
    const botonesComprar = document.getElementsByTagName("button")
    
    if(botonesComprar.length > 0){
        for(let botonComprar of botonesComprar){
            botonComprar.onclick = function(){
                //console.log(botonComprar.dataset.codigo)
                let productoParaCarrito = productos.find((producto) => producto.id === botonComprar.dataset.codigo)
                carrito.push(productoParaCarrito)
                console.clear()
                console.table(carrito)
                /*
                for (let producto of productos){
                    if (producto.id === botonComprar.dataset.codigo) {
                        carrito.push(producto)
                        console.clear()
                        console.table(carrito)
                        break
                    }
                }*/
                    
                //Agregar al array una copia del producto completo.
            }
        }
    }
}

//FUNCION PRINCIPAL
cargarCategorias()
//cargarCategoriasProductos()
cargarProductos(productos)


//document.appendChild(crearCardHTML())


