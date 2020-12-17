var cont=0;

function main(){
setInterval(loadDoc,1000);

}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let titulo = JSON.parse(this.responseText);
          for(let i=cont;i<titulo.listaPeliculas.length;i++){
              document.getElementById('demo').innerHTML += titulo.listaPeliculas[i].titulo+"<br>";
              cont++;
          }
           /* document.getElementById('titulo').appendChild(document.createTextNode(titulo[1].titulo)); */ /// Otro ejercicio
      }
    };
    xhttp.open("GET", "prueba.txt", true);
    xhttp.send();
  }
window.addEventListener('load',main);