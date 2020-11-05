function main(){
    document.getElementById('alineacionIzquierda').addEventListener('click',letraizquierda);
    document.getElementById('alineacionDerecha').addEventListener('click',letraDerecha);
    document.getElementById('alineacionJustificada').addEventListener('click',letraJustificada);
    document.getElementById('incrementarLetra').addEventListener('click',incrementarLetra);
    document.getElementById('defaultLetra').addEventListener('click',defaultLetra);
    document.getElementById('decrementarLetra').addEventListener('click',decrementarLetra);
}

window.addEventListener('load',main)

function letraizquierda(){
    let parrafo = document.getElementById('texto');
    parrafo.style.textAlign = "left";
}
function letraDerecha(){
    let parrafo = document.getElementById('texto');
    parrafo.style.textAlign = "right";
}
function letraJustificada(){
    let parrafo = document.getElementById('texto');
    parrafo.style.textAlign = "justify";
}

function incrementarLetra(){
    let tamaño =parseInt(document.getElementById('texto').style.fontSize);
    if(isNaN(tamaño))
        tamaño=16;
    document.getElementById('texto').style.fontSize = (tamaño+1) + "px"; 
}

function defaultLetra(){
    document.getElementById('texto').style.fontSize = 16 + "px";
}

function decrementarLetra(){
    let tamaño =parseInt(document.getElementById('texto').style.fontSize);
    console.log(tamaño);
    if(isNaN(tamaño))
        tamaño=16;
    document.getElementById('texto').style.fontSize = (tamaño-1) + "px"; 
}