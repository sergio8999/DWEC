/* 
Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se
mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”. Impleméntala la
funcionalidad para poder navegar entre un conjunto de imágenes que tendrás
previamente preparadas.
*/
var fotos = ["1.jpg","2.jpg","3.jpg","4.jpg"];
var cont= 0;
function main(){
    document.getElementById('siguiente').addEventListener('click',siguienteImagen);
    document.getElementById('anterior').addEventListener('click',anteriorImagen);
}

function siguienteImagen(){
    let nombreImagen = document.getElementsByTagName('img')[0];
    if(cont == fotos.length-1){
        cont = 0;
        nombreImagen.setAttribute("src", fotos[cont]);
    }else{
        cont++;
        nombreImagen.setAttribute("src", fotos[cont]);
    }
}

function anteriorImagen(){
    let nombreImagen = document.getElementsByTagName('img')[0];
    if(cont == 0){
        cont = fotos.length-1;
        nombreImagen.setAttribute("src", fotos[cont]);
    }else{
        cont--;
        nombreImagen.setAttribute("src", fotos[cont]);
    }
}

window.addEventListener('load',main);