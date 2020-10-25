/* 
    Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
 de ocurrencias de cada uno de los valores
*/

function lanzamiento(){
    return Math.floor(Math.random()*6+1);
}
var numero1=0,numero2=0,numero3=0,numero4=0,numero5=0,numero6=0;

for(let i=0;i<6000;i++){
    let numero= lanzamiento();
    if(numero == 1)
        numero1++;
    else if(numero == 2)
        numero2++;
    else if(numero == 3)
        numero3++;
    else if(numero == 4)
        numero4++;
    else if(numero == 5)
        numero5++;
    else
        numero6++;
}

document.write("El numero 1 ha salido " + numero1 + " veces<br>");
document.write("El numero 2 ha salido " + numero2 + " veces<br>");
document.write("El numero 3 ha salido " + numero3 + " veces<br>");
document.write("El numero 4 ha salido " + numero4 + " veces<br>");
document.write("El numero 5 ha salido " + numero5 + " veces<br>");
document.write("El numero 6 ha salido " + numero6 + " veces<br>");