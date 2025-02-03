//Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos
//para mostrar solo aquellos que sean mayores que un valor dado por el usuario.

const numeros = [5, 2, 9, 1, 5, 6];
const valorUsuario = prompt("Ingresa un número:");

var resultado = [];
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > valorUsuario) {
        resultado.push(numeros[i]);
    }
}

console.log("Números mayores que " + valorUsuario + ": " + resultado);

