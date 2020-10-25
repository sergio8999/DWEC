var numero = parseInt(prompt("Introduzca numero:"));

switch(true){
    case (numero%2 == 0):
            document.write("El numero "+numero+" es par<br>");
            break;
    case (numero%3 == 0):
            document.write("El numero "+numero+" es multiplo de 3<br>");
            break;
    case (numero%5 == 0):
            document.write("El numero "+numero+" es multiplo de 5<br>");
            break;
}
