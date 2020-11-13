/* 
Crea una página web con al menos tres párrafos de texto y dentro de ellos un número
indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
uso del DOM muestra los siguientes datos:
• Número de enlaces de la página
• Dirección a la que enlaza el penúltimo enlace
• Numero de enlaces que enlazan a google
• Número de enlaces del tercer párrafo 
*/

function main(){
    numeroEnlaces();
    penultimoEnlace();
    enlacesGoogle();
    enlacesTercerParrafo();
}

function numeroEnlaces(){
    let newParagraph = document.createElement('p');
    let newText = document.createTextNode('El numero de enlaces es ' + document.getElementsByTagName('a').length);
    newParagraph.appendChild(newText);
    document.getElementsByTagName('div')[0].appendChild(newParagraph);
}

function penultimoEnlace(){
    let newParagraph = document.createElement('p');
    let nEnlaces = document.getElementsByTagName('a').length;
    let newText = document.createTextNode("La penultima direccion de enlace es " +document.getElementsByTagName('a')[nEnlaces-2]);
    newParagraph.appendChild(newText);
    document.getElementsByTagName('div')[0].appendChild(newParagraph);
}
function enlacesGoogle(){
    let newParagraph = document.createElement('p');
    let nEnlaces = 0;
    let enlaces = document.getElementsByTagName('a');
    for(enlace of enlaces){
        if(enlace.href.slice(0,22) == "https://www.google.es/")
        nEnlaces++;
    }
    let newText = document.createTextNode("El numero de enlaces a google es  " + nEnlaces);
    newParagraph.appendChild(newText);
    document.getElementsByTagName('div')[0].appendChild(newParagraph);
}

function enlacesTercerParrafo(){
    let newParagraph = document.createElement('p');
    let nEnlaces = document.getElementsByTagName('p')[2].getElementsByTagName('a').length;
    let newText = document.createTextNode("El numero de enlaces en el tercer párrafos es " + nEnlaces);
    newParagraph.appendChild(newText);
    document.getElementsByTagName('div')[0].appendChild(newParagraph);
}
window.addEventListener('load',main);