/* 
    Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert
*/

function myFunction() {
    alert("Ha dado click");
  }
  document.addEventListener('click',myFunction);