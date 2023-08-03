//Tipos de datos
//Alfanumericos
//let nombrePasajero = "Pedro Silva";
//nombrePasajero - "Ramon Silva";

//NUmerico
const valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Logico
let boletoActivo  = true;

//Operaciones aritmeticas
//suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;


//Orden de presedencia
//()
// * y /
//+ y -
let totalBoletos = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

//Concatenacion texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseFloat('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);
