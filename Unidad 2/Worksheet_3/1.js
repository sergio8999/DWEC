/* 
    1. Crea las siguientes funciones y ll malas desde á una página XHTML para mostrar su funcionamiento:
        a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
        b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena.
        c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada devuelve la longitud de la palabra más larga en ella contenida
        d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
        e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, de tal modo que sólo aparece en mayúscula la primera letra y el resto en minúscula.
*/


var cadena = new String(prompt("Introduce cadena de texto: "));
var words = cadena.split(" ");

function invierteCadena(cad_arg){
    let cadenaRevertida = new String();
    for(let i=cad_arg.length;i>=0;i--)
        cadenaRevertida += cad_arg.charAt(i);
    return cadenaRevertida;
}

function inviertePalabras(cad_arg){
    var palabrasRevertidas = new String();
    for(let palabra of cad_arg)
        palabrasRevertidas = palabrasRevertidas.concat(" ",invierteCadena(palabra));
    return palabrasRevertidas;
} 

function encuentraPalabraMasLarga(cad_arg){
    let longitudPalabra = 0;
    for(let palabra of cad_arg)
        if(palabra.length>longitudPalabra)
            longitudPalabra = palabra.length;
    return longitudPalabra;
}

function filtraPalabrasMasLargas(cad_arg,i){
    let palabras = 0;
    for(let palabra of cad_arg)
        if(palabra.length>i)
            palabras++;
    return palabras;
}

function cadenaBienFormada(cad_arg){

    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}

document.write("La cadena revertida es: " + invierteCadena(cadena));
document.write("<br>Las palabras invertidas de la cadena: " + inviertePalabras(words));
document.write("<br>La longitud de palabra mayor tiene " + encuentraPalabraMasLarga(words) + " letra/s");
document.write("<br>Contiene " + filtraPalabrasMasLargas(words,3) + " palabra/s mayor de 3 letras");
document.write("<br>" + cadenaBienFormada(cadena));