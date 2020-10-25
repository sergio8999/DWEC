// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function addOnlyNums(...array)
{
    let suma = 0;
    for(numero of array)
        // Esta es otra forma
        /*if(!isNaN(numero))
            suma += numero;*/
        if(typeof(numero) == "number")
        suma += numero;
    return suma;
}

// Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.
function countTheArgs(...array)
{
    let suma = 0;
    for(numero in array)
        suma ++;
    return suma;
}

document.write(addOnlyNums(2,"hola",4,8,"DWEC",5)+"<br>");
document.write(countTheArgs('cat', 'dog'));