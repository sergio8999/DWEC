/* 
    Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de
DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee. Por tanto
inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones
automáticamente aparezca otro input para elegir fichero.
*/

function main(){
    document.getElementById('adjuntar').addEventListener('click',anadirFichero);
}

function anadirFichero(){
    let newFichero = document.createElement('input');
    newFichero.setAttribute('type','file');
    document.getElementsByTagName('div')[0].appendChild(newFichero);
    let saltoLinea = document.createElement('br');
    document.getElementsByTagName('div')[0].appendChild(saltoLinea);
}

window.addEventListener('load',main);