var numero = parseInt(prompt("Inserte numero a adivinar:"));
var num;

do{
    num = parseInt(prompt("Introduzzca numero:"));
    if(num<numero)
        document.write("El numero a adivinar es mayor<br>");
    else    
        document.write("El numero a adivinar es menor<br>");
}while(numero!=num);
document.write("Acertaste!!!");