var columnas = parseInt(prompt("Introduzca numero de columnas:"));
var altura = parseInt(prompt("Introduzca altura (pixels):"));
var anchura = parseInt(prompt("Introduzca anchura (pixels):"));
var i=1;

document.write('<table border="0" cellspacing = "2" bgcolor = "black" width ="'+(columnas*anchura)+'">');
document.write('<tr bgcolor = "white" height = "'+altura+'">');
while(i<=columhas){
    document.write('<td width = "'+anchura+'">&nbsp;</td>');
    i++;    
}    
document.write('</tr>');
document.write('</table>');