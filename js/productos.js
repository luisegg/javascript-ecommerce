//ARRAY DE ELEMENTOS
//const arrayCategorias = []



//ARRAY DE OBJETOS
//const productos = []


// const carritoTemporal = [
//     { id: "1", imagen: "🍌", nombre: "Bananas", precio: 1220, categoria: "Fruta" },
//     { id: "2", imagen: "🍎", nombre: "Manzana roja", precio: 1890, categoria: "Fruta" },
//     { id: "3", imagen: "🥝", nombre: "Kiwis", precio: 760, categoria: "Fruta" },
//     { id: "4", imagen: "🍈", nombre: "Melón", precio: 350, categoria: "Fruta" }
// ]


const carritoTemporal = [
    { id: "1", imagen: "🍌", nombre: "Bananas", precio: 1220, cantidad:1, categoria: "Fruta" },
    { id: "2", imagen: "🍎", nombre: "Manzana roja", precio: 1890, cantidad:1, categoria: "Fruta" },
    { id: "3", imagen: "🥝", nombre: "Kiwis", precio: 760, cantidad:1, categoria: "Fruta" },
    { id: "4", imagen: "🍈", nombre: "Melón", precio: 350, cantidad:1, categoria: "Fruta" }
]


function calcularCarrito(){
    //acc = accumulator
    //debugger
    let totalCarrito = carritoTemporal.reduce((acc, producto)=> acc + producto.precio * producto.cantidad, 0)
    console.log("Total del carrito: $", totalCarrito)
}

function mapearProductos(){
    console.log('entra')
    const productosSinCategoria = productos.map((producto) =>{
        return {
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio
        }
    })
    console.table(productosSinCategoria)
}

const IVA = 1.21
function verProductosConIVA(){
    const productosConIVA = productos.map((producto) =>{
        return {
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: parseFloat((producto.precio * IVA).toFixed(2))
        }
    })
    console.table(productosConIVA)
}

function verProductosConMultiplesPrecios(){
    const productosConIVA = productos.map((producto) =>{
        return {
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio,
            precio10off: parseFloat((producto.precio * 0.9).toFixed(2)),
            precio5on: parseFloat((producto.precio * 1.05).toFixed(2))
        }
    })
    console.table(productosConIVA)
}

function ordenarPorPrecio(){
    let iteraciones = 0
    productos.sort((a, b) => {
        iteraciones++

        if(a.precio > b.precio){
            return 1
        }else if(a.precio < b.precio){
            return -1
        }else{
            return 0
        }
    })

    console.log("Veces iteradas", iteraciones)
    console.table(productos)
}

// const productos = [
//     { id: "1", imagen: "🍌", nombre: "Bananas", precio: 1220, categoria: "Fruta" },
//     { id: "2", imagen: "🍎", nombre: "Manzana roja", precio: 1890, categoria: "Fruta" },
//     { id: "3", imagen: "🥝", nombre: "Kiwis", precio: 760, categoria: "Fruta" },
//     { id: "4", imagen: "🍈", nombre: "Melón", precio: 350, categoria: "Fruta" },
//     { id: "5", imagen: "🍍", nombre: "Ananá", precio: 750, categoria: "Fruta" },
//     { id: "6", imagen: "🍅", nombre: "Tomates", precio: 940, categoria: "Fruta" },
//     { id: "7", imagen: "🍏", nombre: "Manzana verde", precio: 790, categoria: "Fruta" },
//     { id: "8", imagen: "🍉", nombre: "Pomelo Rosado", precio: 1200, categoria: "Fruta" },
//     { id: "9", imagen: "🍑", nombre: "Duraznos", precio: 710, categoria: "Fruta" },
//     { id: "10", imagen: "🫐", nombre: "Arándanos", precio: 650, categoria: "Fruta" },
//     { id: "11", imagen: "🥭", nombre: "Mango", precio: 290, categoria: "Fruta" },
//     { id: "12", imagen: "🍇", nombre: "Uvas", precio: 700, categoria: "Fruta" },
//     { id: "13", imagen: "🍐", nombre: "Peras", precio: 320, categoria: "Fruta" },
//     { id: "14", imagen: "🍒", nombre: "Cerezas", precio: 1100, categoria: "Fruta" },
//     { id: "15", imagen: "🍓", nombre: "Frutillas", precio: 600, categoria: "Fruta" },
//     { id: "16", imagen: "🍋", nombre: "Limones", precio: 260, categoria: "Fruta" },
//     { id: "17", imagen: "🍋‍🟩", nombre: "Lima", precio: 2260, categoria: "Fruta" },
//     { id: "18", imagen: "🍉", nombre: "Sandía", precio: 1140, categoria: "Fruta" },
//     { id: "19", imagen: "🥑", nombre: "Palta", precio: 850, categoria: "Fruta" },
//     { id: "20", imagen: "🌽", nombre: "Maíz", precio: 220, categoria: "Verdura" },
//     { id: "21", imagen: "🥒", nombre: "Pepino", precio: 190, categoria: "Verdura" },
//     { id: "22", imagen: "🌶️", nombre: "Pimiento", precio: 450, categoria: "Verdura" },
//     { id: "23", imagen: "🥬", nombre: "Lechuga", precio: 150, categoria: "Verdura" },
//     { id: "24", imagen: "🫑", nombre: "Morrón verde", precio: 550, categoria: "Verdura" },
//     { id: "25", imagen: "🧅", nombre: "Cebolla", precio: 130, categoria: "Verdura" },
//     { id: "26", imagen: "🧄", nombre: "Ajo", precio: 100, categoria: "Verdura" },
//     { id: "27", imagen: "🥔", nombre: "Papa", precio: 180, categoria: "Verdura" },
//     { id: "28", imagen: "🫒", nombre: "Aceitunas", precio: 360, categoria: "Verdura" },
//     { id: "29", imagen: "🍞", nombre: "Pan", precio: 200, categoria: "Comida" },
//     { id: "30", imagen: "🥫", nombre: "Sopa enlatada", precio: 320, categoria: "Comida" },
//     { id: "31", imagen: "🍝", nombre: "Pasta", precio: 400, categoria: "Comida" },
//     { id: "32", imagen: "🧀", nombre: "Queso", precio: 450, categoria: "Comida" },
//     { id: "33", imagen: "🍪", nombre: "Galletas", precio: 250, categoria: "Comida" },
//     { id: "34", imagen: "🥤", nombre: "Refresco", precio: 150, categoria: "Bebida" },
//     { id: "35", imagen: "🍺", nombre: "Cerveza", precio: 500, categoria: "Bebida" },
//     { id: "36", imagen: "🍷", nombre: "Vino", precio: 1800, categoria: "Bebida" },
//     { id: "37", imagen: "🧃", nombre: "Jugo", precio: 180, categoria: "Bebida" },
//     { id: "38", imagen: "☕", nombre: "Café Espresso", precio: 7500, categoria: "Bebida" },
//     { id: "39", imagen: "🐟", nombre: "Pescado", precio: 700, categoria: "Comida" },
//     { id: "40", imagen: "🍖", nombre: "Carne", precio: 1200, categoria: "Comida" },
//     { id: "41", imagen: "🍚", nombre: "Arroz", precio: 250, categoria: "Comida" },
//     { id: "42", imagen: "🥚", nombre: "Huevos", precio: 180, categoria: "Comida" },
//     { id: "43", imagen: "🍾", nombre: "Espumante", precio: 1100, categoria: "Bebida" },
//     { id: "44", imagen: "🥦", nombre: "Brócoli", precio: 750, categoria: "Verdura" },
//     { id: "45", imagen: "🍹", nombre: "Licores", precio: 9300, categoria: "Bebida" },
//     { id: "46", imagen: "💧", nombre: "Agua purificada", precio: 1230, categoria: "Bebida" },
//     { id: "47", imagen: "🥃", nombre: "Whisky añejo", precio: 11820, categoria: "Bebida" },
//     { id: "48", imagen: "🍊", nombre: "Naranja", precio: 915, categoria: "Fruta" }
// ]
 

//Funcion de orden superior
function saludar(fn, mensaje){
    fn(mensaje)
}

function recorrerArrayProductos(){
    productos.forEach((producto) =>{
        console.log(producto)
    })
}

function buscarProductoPorId() {
    /*
    let productoEncontrado = productos.find((producto) => producto.id === '140')
    if(productoEncontrado !== undefined){
        console.log(productoEncontrado)
    } else{
        console.warn("No se encontró el producto indicado")
    }
        */

    for (let i = 0; i < productos.length; i++){
        if(productos[i].id === "21"){
            console.log(productos[i])
        }
    }
    
}

function buscarCategoria(){
    let categoriaEncontrada = arrayCategorias.find((categoria) => categoria === "Bebida")
    console.log(categoriaEncontrada)

    /*
    let incluye = arrayCategorias.includes("Bebidas")
    console.log(incluye)

    let indice = arrayCategorias.indexOf("Bebida")
    console.log(indice)
    */

    
}



function filtrarProductosPorCategoria(){
    let cate = prompt("Ingresa la categoría a filtrar")

    if(cate.trim() !== ""){
        const arrayFiltrado = productos.filter((producto) => producto.categoria === cate)
        if(arrayFiltrado.length > 0){
            console.table(arrayFiltrado)
        }else{
            console.log(" \u26A0 no hay productos con esa categoria")
        }
        
    }
}


// EJEMPLO DE MANEJO DE PROMESAS JS

/*
    Estados de una promesa = 'Pending' > 'Fulfilled' > 'Rejected'
    callbacks: resolve - reject
    callback: resolve > método de control then() permite recibir el resultado
    callback: reject > método de control catch() permite recibir el error

    const arrayFetch = [fetch(URLeconomia), fetch(URLespectaculos), fetch(URLSalud)]

    Promise.all()
           .allSettled(arrayFetch)
           .race()
*/


function generarNroRandom(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const nroRandom = Math.floor(Math.random() * 10000)
            if(nroRandom > 4000){
                //Promesa resuelta
                resolve('Numero mayor a 4000: '+nroRandom)
            }else{
                //Promesa rechazada
                reject('Numero menor o igual a 4000: '+nroRandom)
            }
        }, 5000)
        
    })
}