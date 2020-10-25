var columnas = parseInt(prompt("Introduzca numero de columnas:"));
var altura = parseInt(prompt("Introduzca altura (pixels):"));
var anchura = parseInt(prompt("Introduzca anchura (pixels):"));

document.write('<table border="0" cellspacing = "2" bgcolor = "black" width ="'+(columnas*anchura)+'">');
document.write('<tr bgcolor = "white" height = "'+altura+'">');
for(let i=1;i<=columnas;i++)
    document.write('<td width = "'+anchura+'">&nbsp;</td>');
document.write('</tr>');
document.write('</table>');