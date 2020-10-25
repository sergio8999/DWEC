/* 
    Crea una función que calcule el factorial de un número dado. Para comprobarlo, diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10
*/

function factorial(numero){
    if(numero == 1)
        return 1;
    else
        return numero * factorial(numero-1);
}
document.write("<table>");
document.write("<tr>")
document.write("<th>Número</th>");
document.write("<th>Factorial</th>");
document.write("</tr>");
for(let i=1;i<=10;i++){
    document.write("<tr>")
    document.write("<td>" + i + "</td>");
    document.write("<td>" + factorial(i) + "</td>");
    document.write("</tr>");
}
document.write("<table>")