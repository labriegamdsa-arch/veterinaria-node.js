// index.js recibe las instrucciones y decide que hacer

// importar las funciones del archivo operaciones.js
const { registrar, leer } = require("./operaciones");


// process.argv es un array que contiene los argumentos escritos en la terminal
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];


// Si la operación es "registrar", se ejecuta la funcion y se entregan los datos
if (operacion === "registrar") {    
  registrar(nombre, edad, animal, color, enfermedad);
}

// Si la operacion es "leer", se ejecuta la funcion leer
if (operacion === "leer") {
  leer();
}



