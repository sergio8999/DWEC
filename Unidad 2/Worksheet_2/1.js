/* 
    1. Crea una página en la que se muestre:
        - Un número aleatorio entre 0 y 1.
        - Igual pero entre 100 y 200.
        . Pide dos valores al usuario y genera un nº aleatorio entre esos dos valores.
*/
// generar numero aleatorio entre 100 y 200 incluidos. Math.floor(Math.random)()*(max-min+1)+min)

var min = parseInt(prompt("Introduzca valor minimo: "));
var max = parseInt(prompt("Introduzca valor maximo: "));
var aleatorio100 = Math.floor(Math.random()*(200-100)+100);

var aleatorioUsuario = Math.floor(Math.random()*(max-min)+min);

document.write("Numero aleatorio entre 0 y 1: ·" + Math.random());
document.write("<br>Numero aleatorio entre 100 y 200: ·" + aleatorio100);
document.write("<br>Numero aleatorio introducido por usuario: ·" + aleatorioUsuario);