
/* 
    1. Fíjate en las 2 siguientes capturas de pantalla:
    Se trata de la misma página con 2 estilos diferentes (tema normal y tema minimalista).
    Haciendo sólo uso de JavaScript consigue que se pueda cambiar el estilo (pulsando los
    enlaces de la parte superior) para que quede tal cual puedes ver. Deberás hacerlo con dos
    versiones:
        a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, sino
        que se establece mediante atributos del objeto style).
        b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según la
        opción pulsada.
*/


function main(){    
    let temaMinimalistaHTML = document.getElementById('textoMinimalista');
    let temaNormalHTML = document.getElementById('textoNormal');
    temaNormal();
    temaNormalHTML.addEventListener('click',temaNormal);
    temaMinimalistaHTML.addEventListener('click',temaMinimalista);
}

// a)
function temaNormal(){   
    let divElegirTema = document.getElementById('elegirTema');
    let temaNormalHTML = document.getElementById('textoNormal');
    let temaMinimalistaHTML = document.getElementById('textoMinimalista');
    let divMarco = document.getElementById('marco');
    let parrafoOculto = document.getElementById('parrafoOculto');
    let divLateral = document.getElementById('lateral');
    let divTexto = document.getElementById('texto');

    divLateral.style.width = "200px";
    divLateral.style.height = "970px";
    divLateral.style.backgroundColor = "#00AAE4";
    divLateral.style.float = "left";
    divTexto.style.marginLeft = "230px";
    divElegirTema.style.backgroundColor = "lightblue";
    temaNormalHTML.style.color = "blue";
    temaMinimalistaHTML.style.color = "blue";
    temaNormalHTML.style.fontWeight = "bold";
    temaMinimalistaHTML.style.fontWeight = "bold";
    temaNormalHTML.style.textDecoration = "none";
    temaMinimalistaHTML.style.textDecoration = "none";
    divElegirTema.style.borderStyle = "solid";
    document.body.style.backgroundColor = "#fdfd96";
    document.body.style.fontSize = "16px";
    divMarco.style.backgroundColor = "yellow";
    divMarco.style.borderStyle = "solid";
    parrafoOculto.style.display = "inline";
    divLateral.style.display = "inline";
}

function temaMinimalista(){
    let divElegirTema = document.getElementById('elegirTema');
    let temaNormalHTML = document.getElementById('textoNormal');
    let temaMinimalistaHTML = document.getElementById('textoMinimalista');
    let divMarco = document.getElementById('marco');
    let parrafoOculto = document.getElementById('parrafoOculto');
    let divLateral = document.getElementById('lateral');
    let divTexto = document.getElementById('texto');

    divLateral.style.display = "none";
    divElegirTema.style.backgroundColor = "white";
    temaNormalHTML.style.color = "blue";
    temaMinimalistaHTML.style.color = "blue";
    temaNormalHTML.style.fontWeight = "normal";
    temaMinimalistaHTML.style.fontWeight = "normal";
    temaNormalHTML.style.textDecoration = "underline";
    temaMinimalistaHTML.style.textDecoration = "underline";
    divElegirTema.style.borderStyle = "none";
    document.body.style.backgroundColor = "white";
    document.body.style.fontSize = "20px";
    divMarco.style.backgroundColor = "white";
    divMarco.style.borderStyle = "none";
    parrafoOculto.style.display = "none";
    divTexto.style.marginLeft = "";
}

window.addEventListener('load',main);

