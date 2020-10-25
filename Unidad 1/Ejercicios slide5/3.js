// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

var array1 = [3,4,6,9,"Lunes"];
var array2 = [8,4,9,2,"Viernes"];

function combineTwoArrays(primerArray,segundoArray)
{
    return [...primerArray,...segundoArray];
} 

document.write(combineTwoArrays(array1,array2));