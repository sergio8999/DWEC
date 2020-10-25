/* 
    5. Crea una web para resolver ecuaciones de segundo grado. Debera pedir por tanto los coeficientes y mostrar las soluciones posibles.
*/

var a = parseFloat(prompt("Introduzca valor de x2(a): "));
var b = parseFloat(prompt("Introduzca valor de x(b): "));
var c = parseFloat(prompt("Introduzca valor de num(c): "));

var solucion1 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
var solucion2 = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);

document.write("La solución 1 es : " + solucion1);
document.write("<br>La solución 2 es : " + solucion2);