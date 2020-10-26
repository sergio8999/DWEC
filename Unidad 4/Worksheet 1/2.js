/* 
    Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento
*/

function mostrarCoordenadas(e){
    console.log(e.offsetX +"," + e.offsetY);
}

document.addEventListener('mousemove',mostrarCoordenadas);