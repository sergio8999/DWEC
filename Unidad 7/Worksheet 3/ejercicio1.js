/* 
1.Crea una tabla de 8 filas, a continuación pon el fondo rojo a todas aquellas que estén por
encima de la tercera (2) y pon el fondo azul a todas aquellas que estén por debajo de la tercera
(2)
*/

function main(){
    $("tr:gt(2)").css("background-color","red");
    $("tr:lt(2)").css("background-color","blue");
}

window.addEventListener('load',main);