//para comentarios largos
/* Para comentarios largos de varios rengrones

let edad = 25;
let nombre = "Lucas";    
//let define variables que pueden cambiar con el tiempo y asignara el ultimo valor que se le asigna
let apellido = "Ontiveros";
const PI = 3.14; // se usa para constantes y no cambia, 
let aniodeNacimiento = 1985; 

let miEdad = 2022 - aniodeNacimiento; //3

let nombreCompleto = nombre + apellido

let profecion = prompt("Cual es tu profecion")

let miNombre = prompt("Cual es tu nombres?"); //Lo que el usuario completa aca queda guardadon dentro de la variable miNombre. 

console.log("este es un mensaje de la consola"); //Este mensaje aparecera en la consola

console.log(miEdad); // tambien puedo poner una variable para que aparezca el resultado en la consola. 

/*console.log("Hola" + no;mbre + apellido + "Tu edad es" + edad); 

alert("hola" + nombre);

*/ 
/*
let cantidadeManzanas =Number(prompt("cuantas manzanas tenes ?"));
let candtidadeNaranjas =Number(prompt("cuantas mnaranjas tenes ?"));

console.log(cantidadeManzanas + candtidadeNaranjas); 

// para combertir en numeros
// Number() // este un objeto es constructos lo combierte en nro l oque  se ponga dentro
// parseInt() para numero enteros
// parseFloat() Para numeros decimales
// `todo lo que quiero poner de texto ${lavarible}` estas backs tips esta la izquieda del 1
console.log(`hola ${nombreCompleto} tu profecion es: ${profecion}`); 
*/

/* CLASE 02: LOS BOOLEANOS SON TRUE O FALSE, ES LO QUE SE VA A EVALUAR. 
*/ 
/*
let precio = 1000;
let pago = parseFloat(prompt("con cuento me pagas?"));
// parsefloat por si el usuario ingresa uun decimal
if(20 > 10) {
    let vuelto = pago-precio; 
    console.log("me pagaste de mas, tu vuelto es: " + vuelto)
}

let deporteFavorito = prompt("cual es tu deporte favorito");

if(deporteFavorito == "voley") {
    alert("el mio tambien!"); 
} else{ 
    alert(`tu deporte es ${deporteFavorito}. El mio es voley`);
} // else es si la condicion no se cumple.

// que pasa si hay varias cosas que queremos evaluar. se anidan condiciones
if(precio < 20) {alert("el precio es menor que 20")} 
else if (precio < 30) {alert("el precio es menor que 30")}
else if (precio < 40) {alert("el precio es menor que 40")}
else{alert("el precio es mayor a 40")}

/* 
// CLASE 03 LOOPS
// FOR (DESDE; HASTA; ACTUALIZACION) {SENTENCIAS}
*/
/*
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

// empezamos desde 0 y va a correr hasta que i sea 10; i ++ es la actualizacion cada 1 loop suma 1 a i. tambien se podria poner i + 2 por ejemplo y le suma 2. 

let ingresaNumero = parseInt(prompt("Ingresa un numero"));
let numeroRepeticiones = parseInt(prompt("cuantas veces quiere repetir?"));

for(let i = 0; i <= numeroRepeticiones; i++) {
    let resultado = ingresaNumero * i
    console.log(resultado);
    }
*/

alert("Adivina mi color favorito")
let color = prompt("Ingresa un color")
while (color != "azul") {
    alert(`Has fallado el ${color} es incorrecto`);
    color = prompt ("Ingresa otro color")
}

