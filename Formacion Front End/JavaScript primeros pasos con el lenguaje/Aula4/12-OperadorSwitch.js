const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);


    //Condicon con if 
    /* if (ciudadDestino == "Bogota") {
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago") {
        valorPasaje = 380;
    } else if (ciudadDestino == "Montevideo") {
        valorPasaje = 200;
    } */
    switch(ciudadDestino){
        case "Bogota":
            valorPasaje = 500;
            break;
        case "Lima":
            valorPasaje = 400;
            break;
        case "Santiago":
            valorPasaje = 380;
            break;    
        case "Montevideo":
            valorPasaje = 200;
            break; 
        default:
            console.log('Ciudad no disponible para viajer')
            break;
    }

    if(valorPasaje > 0)
    console.log(`El valor del pasaje es: ${valorPasaje}`);
 
