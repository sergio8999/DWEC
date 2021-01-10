/* 
    5. Selecciona el primer elemento de la primera lista y oculta dicho elemento.
        Lista 1:
            1. Tortilla
            2. Jamón
            3. Queso
    Lista 2:
        ■ Coca Cola
        ■ Leche
        ■ Té
*/

function main(){
$("ol > li:first-child").hide();
}

window.addEventListener('load',main);