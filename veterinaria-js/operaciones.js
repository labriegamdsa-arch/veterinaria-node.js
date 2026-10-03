// importar el modulo FileSystem de Node
const fs = require("fs");

// funcion para registrar una cita, recibe cinco parametros y los guarda en un objeto
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

// Lee el archivo citas.json, obtenemos el contenido como texto 

  const citas = JSON.parse(
    fs.readFileSync("citas.json", "utf8")
  );


// agregar las citas al final del array  
citas.push(cita);

// guardar el array actualizado, utilizar stringify para convertir el array a texto y guardarlo en citas.json
  fs.writeFileSync(
    "citas.json",
    JSON.stringify(citas, null, 2)
  );
};


module.exports = { 
    
registrar };

// funcion para leer las citas guardadas en el archivo citas.json
const leer = () => {
  const citas = JSON.parse(
    fs.readFileSync("citas.json", "utf8")
  );

// mostrar las citas en la terminal  
console.log(citas);

};

// exportamos las funciones y perimte que index.js pueda utilizarlas
module.exports = { registrar, 
leer };


