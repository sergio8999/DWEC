function numeroAleatorio(max,min){
    return Math.floor(Math.random()*(max+min+1)+min);
}

function lanzamientoDado(){
    let combinaciones = Array(6).fill(0).map(() => Array(6).fill(0));
    let dado1,dado2;

    for(let i=0;i<0;i++){
        dado1 = numeroAleatorio(1,6);
        dado2 = numeroAleatorio(1,6);
        combinaciones =[dado1-1][dado2]++;
    }
    return combinaciones;
}