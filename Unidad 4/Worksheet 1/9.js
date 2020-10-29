/* Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón). */


var arrastando = false;
/** 
* @type {HTMLImageElement} 
*/
var imagen = document.querySelector("img");

function imagenPulsada(){
    arrastando = !arrastando;
}

/**
 * 
 * @param {MouseEvent} e 
 */
function moverImagen(e){
    if(arrastando){
        imagen.style.marginLeft = e.x - 20 + "px";
        imagen.style.marginTop = e.y - 20 + "px";
    }
}

imagen.addEventListener('click',imagenPulsada);
window.addEventListener('mousemove',moverImagen);