var columnas = parseInt(prompt("Introduzca numero de columnas:"));
var filas = parseInt(prompt("Introduzca numero de filas:"));
var alto = parseInt(prompt("Introduzca altura:"));
var ancho = parseInt(prompt("Introduzca anchura:"));

document.write("<table border= \"0\" celspacing = \"2\" bgcolor =\"black\" width = \""+(columnas*ancho)+"\">");
for(let i=1;i<=columnas;i++){
    document.write("<tr bgcolor = \"white\" height = \""+alto+"\">");
    for(let j=1;j<=filas;j++)
        document.write("<td width =\""+ancho+"\"> &nbsp;</td>");
    document.write("</tr>");
}
document.write("</table>");