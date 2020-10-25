/* 
    Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/



function elementosArray(array,numero){
    for(let i=0;i<numero;i++)
        array[i]=0;
    return array;
}

function añadirUno(array){
    for(let i=0;i<array.length;i++)
        array[i] = array[i]+1;
    return array;
}

function separarArray(array){
    array.join("");
    return array;
}

var myArray = [];

elementosArray(myArray,10);
añadirUno(myArray);
separarArray(myArray);

document.write(myArray);