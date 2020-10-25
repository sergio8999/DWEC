// Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.

function onlyUniques(...arguments){
    let argumentos=[];
    let esta;
    for(palabrasArguments of arguments){
        esta = false;
        for(palabrasArgumentos of argumentos)
            if(palabrasArgumentos == palabrasArguments)
                esta = true;
        if(!esta)
            argumentos.push(palabrasArguments);
    }
    return argumentos;
}

document.write(onlyUniques('cat', 'cat', 'dog', 'pig'));