
/* 
    Mejora el ejercicio anterior para que se pueda hacer en una página con un número
    cualquiera de imágenes.
*/

var arrastrando = false;
/**
 * @type {HTMLImageElement}
 */ 
var imagenMovimiento;
var imagenes = document.querySelectorAll("img");

/**
 * @param {MouseEvent} e 
 */ 
function imagenPulsada(e){
    arrastrando = !arrastrando;
    imagenMovimiento = e.currentTarget;
}

/**
 * @param {MouseEvent} e 
 */ 
function moverImagen(e){
    if(arrastrando){
        imagenMovimiento.style.marginLeft = e.x - 20 + "px";
        imagenMovimiento.style.marginTop = e.y - 20 + "px";
    }
}

imagenes.forEach(imagen => imagen.addEventListener('click',imagenPulsada));
window.addEventListener('mousemove',moverImagen);