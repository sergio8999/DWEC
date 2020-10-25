/* 
    Crea una función para calcular potencias de un modo recursivo
*/

function potencia(base,exponente){
    if(exponente == 1)
        return base;
    else
        return base * potencia(base,exponente-1);
}

document.write("2 elevado a 5 = " + potencia(2,5));