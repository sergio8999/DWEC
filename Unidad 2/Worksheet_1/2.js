/* Crea una página en la que se muestre el resultado de cada uno de los siguientes  apartados: */

/*  a. Crear variable "fecha Hoy" con fecha de hoy
    b. Crear variable "fecha85" que sume 85 días a la variable "fechaHoy"
    c. Crear variable "fecha187" que reste 187 días a la variaqble "fechahoy"
    d. Sumar 2 años a la variable "fecha85"
    e. Restar 24 h a la variable "fecha187"
    f Crear variable fechaResto que sea la resta de fecha85 - fecha187 y observa lo que obtienes
*/
var fechaHoy = new Date();
var fecha85 = new Date();
var fecha187 = new Date();

fecha85.setDate(fechaHoy.getDate()+85);
fecha187.setDate(fechaHoy.getDate()-187);
fecha85.setFullYear(fecha85.getFullYear()+2);

document.write(fechaHoy.toLocaleString());
document.write(fecha85.toLocaleString() + "<br>");
document.write(fecha187.toLocaleString() + "<br>");
document.write(fecha85.toLocaleString() + "<br>");

var fechaResto = new Date(fecha85 - fecha187);
document.write(fechaResto.toLocaleString() + "<br>");