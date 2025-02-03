//Concatenación de arreglos: Crea dos arreglos de strings y luego concatenarlos en un solo arreglo.

const trastes = ["plato", "vaso", "tenedor"];
const comida = ["sopa", "ensalada", "pollo"];

var resultado = [];
for (var i = 0; i < trastes.length; i++) {
    resultado.push(trastes[i]);
}
for (let i = 0; i < comida.length; i++) {
    resultado.push(comida[i]);
}

console.log("Arreglo combinado: " + resultado);