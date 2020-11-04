

function main(){
    var temaNormalHTML = document.getElementById('textoNormal');
    var temaMinimalistaHTML = document.getElementById('textoMinimalista');
    temaNormal();
    temaNormalHTML.addEventListener('click',temaNormal);
    temaMinimalistaHTML.addEventListener('click',temaMinimalista);
}



function temaNormal(){
    document.getElementById('elegirTema').style.backgroundColor = "lightblue";
    document.getElementById('textoNormal').style.color = "blue";
    document.getElementById('textoMinimalista').style.color = "blue";
    document.getElementById('textoNormal').style.fontWeight = "bold";
    document.getElementById('textoMinimalista').style.fontWeight = "bold";
    document.getElementById('textoNormal').style.textDecoration = "none";
    document.getElementById('textoMinimalista').style.textDecoration = "none";
    document.getElementById('elegirTema').style.borderStyle = "solid";
    document.body.style.backgroundColor = "#fdfd96";
    document.body.style.fontSize = "16px";
    document.getElementById('marco').style.backgroundColor = "yellow";
    document.getElementById('marco').style.borderStyle = "solid";
    document.getElementById('parrafoOculto').style.display = "inline";
}

function temaMinimalista(){
    document.getElementById('elegirTema').style.backgroundColor = "white";
    document.getElementById('textoNormal').style.color = "blue";
    document.getElementById('textoMinimalista').style.color = "blue";
    document.getElementById('textoNormal').style.fontWeight = "normal";
    document.getElementById('textoMinimalista').style.fontWeight = "normal";
    document.getElementById('textoNormal').style.textDecoration = "underline";
    document.getElementById('textoMinimalista').style.textDecoration = "underline";
    document.getElementById('elegirTema').style.borderStyle = "none";
    document.body.style.backgroundColor = "white";
    document.body.style.fontSize = "20px";
    document.getElementById('marco').style.backgroundColor = "white";
    document.getElementById('marco').style.borderStyle = "none";
    document.getElementById('parrafoOculto').style.display = "none";
}

window.addEventListener('load',main);

