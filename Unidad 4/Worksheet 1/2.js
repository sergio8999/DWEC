/* 
    Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento
*/

function mostrarCoordenadas(e){
    console.log("X: "+e.offsetX +" Y: " + e.offsetY);
}

document.addEventListener('mousemove',mostrarCoordenadas);