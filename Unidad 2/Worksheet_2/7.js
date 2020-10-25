/* 
    7. Crea una web que genere una tabla con dos columnas. En la primera un número ascendente y en la otra el valor de su seno.
*/

document.write("<table>");
document.write("<tr>");
document.write("<th>Numero</th>");
document.write("<th>seno(numero)</th");
document.write("</tr>");
for(let i=70;i<190;i++){
    document.write("<tr>");
    document.write("<td>"+i+"</td>");
    // Math.sin(i).toFixed(3) para redondear a 3 decimales
    document.write("<td>"+ Math.sin(i*(Math.PI / 180))+"</td>");
    document.write("</tr>");
}
document.write("</table>");
