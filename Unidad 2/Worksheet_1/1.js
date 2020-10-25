/*
    1. Realiza una página que cree un objeto de tipo Date y muestre en la página la siguiente información (cada una en una línea):
    -El año actual
   El mes actual
   El día actual
   La hora actual
   Los minutos actuales
   Los segundos actuales 
*/

var fecha = new Date();

document.write("El año actual es: " + fecha.getFullYear()+"<br>");
document.write("El mes actual es: " + (fecha.getMonth()+1)+"<br>");
document.write("El día actual es: " + fecha.getDate()+"<br>");
document.write("La hora actual es: " + fecha.getHours()+"<br>");
document.write("El minuto actual es: " + fecha.getMinutes()+"<br>");
document.write("El segundo actual es: " + fecha.getSeconds()+"<br>");