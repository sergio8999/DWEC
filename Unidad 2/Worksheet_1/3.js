/* 
    3. Utilizando setTimeout() creo un contador hacía atrás de 60 segundos
*/

var cont = 60;

function contador(){
    console.log(cont);
    cont--;
    if(cont>0)
        setTimeout(contador,1000);
}

setTimeout(contador,1000);