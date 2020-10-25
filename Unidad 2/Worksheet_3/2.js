/* 
    2. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función 
    determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/


var texto = prompt("Introduce texto: ");

function estaFormado(cad_arg){
    let minuscula=false;
    let mayuscula=false;

    for(let i= 0;i<cad_arg.length;i++){
        if(cad_arg.charAt(i) == cad_arg.charAt(i).toLowerCase())
            minuscula = true;
        else
            mayuscula = true;
    }
    if(mayuscula && minuscula)
        return "Contiene mayuscula/s y minuscula/s";
    else if(mayuscula)
        return "Contiene solo mayuscula/s";
    return "Contiene solo minuscula/s";
}

document.write(estaFormado(texto));