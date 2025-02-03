//Ordenamiento de un arreglo: Crea un arreglo de números desordenados y luego ordénalo de menor 
// a mayor utilizando algún algoritmo de ordenamiento (p. ej., el método sort()).

//Bubble sort
function ordenamiento(arreglo) {
    var longitud = arreglo.length;
    for (var i = 0; i < longitud; i++) {
        for (var j = 0; j < longitud - 1 - i; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                // Intercambiar elementos
                [arreglo[j], arreglo[j + 1]] = [arreglo[j + 1], arreglo[j]];
            }
        }
    }
    return arreglo;
}

const numerosDesordenados = [5, 2, 9, 1, 5, 6];
console.log("Arreglo ordenado: " + ordenamiento(numerosDesordenados));
