//Palíndromo: Dada una palabra y verifica si es un palíndromo 
//(es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).

function esPalindromo(palabra) {
  // Convertir la palabra a minúsculas y eliminar espacios en blanco
  var palabraLimpia = palabra.toLowerCase().replace(/\s/g, "");

  // Invertir la palabra
  var palabraInvertida = palabraLimpia.split("").reverse().join("");

  // Comparar la palabra original con la palabra invertida
  return palabraLimpia === palabraInvertida;
}

//Pruebas de uso
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("Hola")); // false
console.log(esPalindromo("Anita lava la tina")); // true