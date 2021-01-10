/* 
3. Selecciona de una tabla todas las casillas vacías y ponlas un color de fondo amarillo.
*/

function main(){
    $("td:empty").css("background-color","yellow");
}

window.addEventListener('load',main);