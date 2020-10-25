// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function sumEveryOther(...arguments){
    let suma=0;
    for(let i=0;i<arguments.length;i++ )
        if(i%2 == 0)
            suma += arguments[i];
    return suma;
}

document.write(sumEveryOther(5,6,3,4,1));