// Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
var array1 = [3,4,6,9,"Lunes"];
var array2 = [8,4,9,2,"Viernes"];
var array3 = [8,2,0,3,"Martes"];
var array4 = [9,2,3,7,"Miercoles"];

function combineAllArrays(...arguments){
    return [...arguments];
}

document.write(combineAllArrays(array1,array2,array3,array4));