// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function suma(...array)
{
    let sumaTotal = 0;
    for(numero of array)
        sumaTotal += numero;
    return sumaTotal;
}

document.write(suma(10,9,8,7));