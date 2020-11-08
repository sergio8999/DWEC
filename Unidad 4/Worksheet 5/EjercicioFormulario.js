/* 
    Crea un formulario típico de registro para tu web. Debe contener al menos campos para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario. Todos los campos son obligatorios, y debes validar el mayor número posible de ellos haciendo uso de expresiones regulares. El nombre de usuario debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer obligatoriamente algún número y algún signo de puntuación.

    onforme sale el foco de cada input, deberás validar el contenido de éste y mostrar información al usuario que le indique si está correcto o no.
*/
function main(){
    document.getElementById('nombre').addEventListener('focusout',comprobarNombre);
    document.getElementById('apellidos').addEventListener('focusout',comprobarNombre);
    document.getElementById('dni').addEventListener('focusout',comprobarDNI);
    document.getElementById('telefono').addEventListener('focusout',comprobarTelefono);
    document.getElementById('email').addEventListener('focusout',comprobarEmail);
    document.getElementById('nombreUsuario').addEventListener('focusout',comprobarUsuario);
}

/**
 * 
 * @param {FocusEvent} e 
 */
function comprobarNombre(e){
  /** @type {RegExp} */
    let regex = /\d/;
    if(!e.currentTarget.value == ""){
        if(regex.test(e.currentTarget.value)){
            alert("Debe escribir solo letras");
            e.currentTarget.value = "";
            e.currentTarget.style.borderColor = "red";
        } else 
            e.currentTarget.style.borderColor = "green ";
        }
}

function comprobarApellidos(e){
      let regex = /d/;
      if(!e.currentTarget.value == ""){
          if(regex.test(e.currentTarget.value)){
              alert("Debe escribir solo letras");
              e.currentTarget.value = "";
              e.currentTarget.style.borderColor = "red";
          } else 
              e.currentTarget.style.borderColor = "green ";
          }
}

function comprobarDNI(e){
      let regex = /^[0-9]{8}([-]?)[TRWAGMYFPDXBNJZSQVHLCKE]$/;
      if(!e.currentTarget.value == ""){
          if(!regex.test(e.currentTarget.value)){
              alert("Escriba bien el DNI");
              e.currentTarget.value = "";
              e.currentTarget.style.borderColor = "red";
          } else 
              e.currentTarget.style.borderColor = "green ";
          }
}

function comprobarTelefono(e){
    let regex = /^[6-9]\d{8}$/;
      if(!e.currentTarget.value == ""){
          if(!regex.test(e.currentTarget.value)){
              alert("Escriba bien telefono");
              e.currentTarget.value = "";
              e.currentTarget.style.borderColor = "red";
          } else 
              e.currentTarget.style.borderColor = "green ";
          }
}

function comprobarEmail(e){
    let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(!e.currentTarget.value == ""){
          if(!regex.test(e.currentTarget.value)){
              alert("Escriba bien el email");
              e.currentTarget.value = "";
              e.currentTarget.style.borderColor = "red";
          } else 
              e.currentTarget.style.borderColor = "green ";
          }
 }

 function comprobarUsuario(e){
    let regex = /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\-\._])[a-zA-Z0-9\-\._]{7,}$/;
      if(!e.currentTarget.value == ""){
          if(!regex.test(e.currentTarget.value)){
              alert("Escriba bien el usuario (minimo letra,numero,caracter)");
              e.currentTarget.value = "";
              e.currentTarget.style.borderColor = "red";
          } else 
              e.currentTarget.style.borderColor = "green ";
          }
 }
  
window.addEventListener('load',main);

