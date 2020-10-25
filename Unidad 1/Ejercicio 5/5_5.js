var numero,suma=0;
for(let i=1;i<=10;i++){
    numero = parseFloat(prompt("Introduzca numero:"));
    suma += numero;
}
document.write("La suma es "+suma);