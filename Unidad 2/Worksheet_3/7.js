/* 
    7. Desarrolla una función que tomando como entrada una cadena de texto nos devuelva si es o no un palíndromo.
*/

var cadenaTexto = prompt("Introduce texto: ");

function palindromo(cad_arg){
    let texto = new String();
    let words = cad_arg.split(" ");
    let esPolindromo = true;

    for(let palabras of words)
        texto += palabras;
    texto = texto.slice(0).toLowerCase();
    for(let i=0;i<texto.length;i++)
        if(texto.charAt(i) != texto.charAt((texto.length-i-1)))
            esPolindromo = false;
    if(esPolindromo)
        return "es palíndromo";
    return "no es palíndromo";
}

document.write("El texto introducido " + palindromo(cadenaTexto));