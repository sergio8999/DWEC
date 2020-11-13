/* 
    Crea una web con una lista de elementos y un botón que cada vez que pulsemos
     introduzca una entrada nueva en la lista.
*/

function main(){
document.getElementById('anadir').addEventListener('click', anadirElemento);
}

function anadirElemento(){
    let newElement = document.createElement('li');
    let newText = document.createTextNode('Elemento ' + (document.getElementsByTagName('li').length+1));
    newElement.appendChild(newText);
    document.getElementsByTagName('ul')[0].appendChild(newElement);
}

window.addEventListener('load',main);