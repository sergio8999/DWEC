/* 
Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de ese sitio, 
deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y 
mostrar el mensaje anterior directamente. 
Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').
*/

function main(){
    checkCookie();
    document.getElementById('borrar').addEventListener('click',borrarCookie);
}
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Bienvenido " + username);
    } else {
      username = prompt("Introduzca nombre:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 5);
        alert("Bienvenido " + username);
      }
    }
}

function borrarCookie(){
    setCookie("username",getCookie("username"),0)
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