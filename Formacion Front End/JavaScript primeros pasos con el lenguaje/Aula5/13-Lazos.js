const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 210;

let i = 0;
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length ) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log("No tenemos ciudades disponibles");
}else console.log("Puedes comprar pasaje: " + ciudadesDisponibles[i]);