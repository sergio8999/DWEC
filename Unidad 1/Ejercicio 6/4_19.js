var ancho = parseInt(prompt("Introduzca anchura:"));

document.write("<table border= \"0\" celspacing = \"2\" bgcolor =\"black\" width = \""+(8*ancho)+"\">");
for(let i=1;i<=8;i++){
    document.write("<tr  height = \""+ancho+"\">");
    /*if(i%2==1)
        color=true;
    else
        color=false;*/

    // otra forma de hacer la condición de arriba
    var color= (i%2 == 1) ? true : false;
    for(let j=1;j<=8;j++){
        if(color){
            document.write("<td width =\""+ancho+"\"bgcolor = \"black\"> &nbsp;</td>");
            color=false;
        }else{
            document.write("<td width =\""+ancho+"\"bgcolor = \"white\"> &nbsp;</td>");
            color=true;
        }
    }
    document.write("</tr>");
}
document.write("</table>");