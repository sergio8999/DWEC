function main(){
  checkCookie();
  document.getElementById('aplicarCambio').addEventListener('click',aplicarCambio);
  document.getElementById('botonCerrarSesion').addEventListener('click',cerrarSesion);
}

function cerrarSesion(){
    setCookie("username",getCookie("username"),0);
    setCookie("colorFondo",getCookie("colorFondo"),0);
    setCookie("colorParrafo",getCookie("colorParrafo"),0);
    setCookie("tamanoLetra",getCookie("tamanoLetra"),0);
    document.getElementById('cerrarSesion').innerHTML = "";
    
}

function aplicarCambio(){
    let colorFondo = document.getElementById('colorFondo').value;
    let colorParrafo = document.getElementById('colorParrafo').value;
    let tamanoLetra = document.getElementById('tamanoLetra').value;

    // Guardar cambio en cookies
    setCookie("colorFondo",colorFondo);
    setCookie("colorParrafo",colorParrafo);
    setCookie("tamanoLetra",tamanoLetra);  
    
    document.body.style.backgroundColor = colorFondo;
    parrafos = document.getElementsByTagName('p');
   for(parrafo of parrafos){
      parrafo.style.color = colorParrafo;
      parrafo.style.fontSize = tamanoLetra + "rem";
    } 
}

function obtenerEstilo(){
    let colorFondo = getCookie("colorFondo");
    let colorParrafo = getCookie("colorParrafo");
    let tamanoLetra = getCookie("tamanoLetra");

    // Guardar cambio en cookies
    document.body.style.backgroundColor = colorFondo;
    document.body.style.color = colorParrafo;
    parrafos = document.getElementsByTagName('p');
    for(parrafo of parrafos){
      parrafo.style.color = colorParrafo;
      parrafo.style.fontsize = tamanoLetra + "rem";
    }
}

function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        alert("Bienvenido " + username);
        obtenerEstilo();
        document.getElementById('cerrarSesion').innerHTML = "<button id='botonCerrarSesion'>Cerrar sesion</button>";
    } else {
      username = prompt("Introduzca nombre:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 5);
        setCookie("colorFondo",document.getElementById('colorFondo').value,5);
        setCookie("colorParrafo",document.getElementById('colorParrafo').value,5);
        setCookie("tamanoLetra",document.getElementById('tamanoLetra').value,5);
        alert("Bienvenido " + username);
        document.getElementById('cerrarSesion').innerHTML = "<button id='botonCerrarSesion'>Cerrar sesion</button>";
      }
    }
}

function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
window.addEventListener('load',main);