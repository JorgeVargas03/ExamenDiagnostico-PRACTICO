//Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un nombre,  
//verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.

const nombres = ["Ana", "Pedro", "Luis", "María"];
let nombreBuscar = "Pedro";

var encontrado = false;
for (var i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log(nombreBuscado + " está en la lista");
} else {
    console.log(nombreBuscado + " no está en la lista");
}
