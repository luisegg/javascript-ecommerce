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



//VARIABLES GLOBALES - ACCESOS AL DOM
const carrito = []

const divContainer = document.getElementById("container")
const divCategories = document.getElementById("categories")
const btnCheckout = document.getElementById("botonCheckout")

//EVENTOS
btnCheckout.onclick = function() {
    console.log('Ir a la pagina  checkout')
}

//Atributos on - Actualmente ya no se usan los atributos on
//<button onclick="agregarAlCarrito()">Comprar</button>




//FUNCIONES DE LOGICA

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

            // TODO:  definir evento click
            divCategories.appendChild(spanCategoria)
        }
    }
}


//Template literal un cuando se usa el backtick `
function crearCardHTML(prod){
    //const prod = { id: "1", imagen: "🍌", nombre: "Bananas", precio: 1220, categoria: "Fruta" },
    //prod.imagen


    //Template String = Plantilla de texto
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

function cargarProductos(){

    //debugger

    if(productos.length > 0){
        for( let producto of productos){
            divContainer.innerHTML += crearCardHTML(producto)
        }
    }
}

function activarClicksBtnComprar(){
    const botonesComprar = document.getElementsByTagName("button")
    
    if(botonesComprar.length > 0){
        for(let botonComprar of botonesComprar){
            botonComprar.onclick = function(){
                console.log(botonComprar.dataset.codigo)
                // TODO: Buscar en array productos, el producto usando el codigo
                //Agregar al array una copia del producto completo.
            }
        }
    }
}

//FUNCION PRINCIPAL
cargarCategorias()
cargarProductos()

//document.appendChild(crearCardHTML())


//EVENTOS


