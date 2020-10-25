// Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

function squareAndSum(...arguments){
    suma=0;
    for(argumentos of arguments)
        //suma += Math.pow(argumentos,2);
        suma += Math.pow(argumentos,2);
    return suma;
}

document.write(squareAndSum(2, 4, 3));