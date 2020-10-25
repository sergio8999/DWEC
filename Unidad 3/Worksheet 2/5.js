/* 
    Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
    al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
    juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function numeroAleatorio(max,min){
    return Math.floor(Math.random()*(max+min+1)+min);
}

function paresImpares(){
    let myArray=[];
    let arrayPares=[];
    let arrayImpares=[];
    //Rellenar Array
    for(let i=0;i<100;i++)
        myArray.push(numeroAleatorio(1,1000));

    /* Otra forma de rellenar
    myArray = Array(100).fill().map(() => numeroAleatorio(1,1000)); */
    
    myArray.forEach(numero =>{
        if(numero%2 == 0)
            arrayPares.push(numero);
        else
            arrayImpares.push(numero);
    })
    return arrayPares.concat(arrayImpares);
}

document.write(paresImpares().join(" "));