//Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.

function reversionCadena(cadena){
    var cadenaInvertida = "";
    
    for (var i = cadena.length - 1; i >= 0; i--){
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

let cadena = "Hola mundo!";
console.log("Cadena invertida: "+ reversionCadena(cadena));
