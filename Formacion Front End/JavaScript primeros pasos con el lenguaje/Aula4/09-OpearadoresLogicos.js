//Operadores de comparacion

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//Palabra reservada if
//Evalua una condicion
const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log("EL pasaje vale 1000");
}

//Operadores logicos 
// Y(AND) - O (OR) - NO(NOT)
// AND = && - Se deben cumplir las dos condiciones 
// OR = || - Se deben cumplir una condicion al menor
// NOT = ! - No se cumple la condicion
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
}

//Aplicando logica negativa
edadPasajero = 17;
estaAcompanado = true;

if (!(ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
} else {
    console.log("Pasaje disponible para venta");
}





