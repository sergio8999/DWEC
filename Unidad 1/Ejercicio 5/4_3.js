var numero1 = parseFloat(prompt("Introduzca primer numero:"));
var numero2 = parseFloat(prompt("Introduzca segundo numero:"));
var operacion = prompt("introduzca operacion:");

switch(operacion){
    case "+":
        document.write(numero1+numero2);
        break;
    case "-":
        document.write(numero1-numero2);
        break;
    case "*":
        document.write(numero1*numero2);
        break;
    case "/":
        document.write(numero1/numero2);
        break;
    default:
        document.write("Operacion incorrecta");
        break;
}