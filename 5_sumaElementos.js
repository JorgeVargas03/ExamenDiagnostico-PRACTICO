//Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.

function sumar(arreglo){
    var acumulador = 0;
    var longitud = arreglo.length;
    for (var i=0; i < longitud; i++){
        acumulador += arreglo [i] 
    }
    return acumulador;
}

const numerosSumar = [5, 2, 9, 1, 5, 6];
console.log("Suma de los arreglos: " + sumar(numerosSumar));
