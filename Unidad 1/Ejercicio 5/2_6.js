var localidad = prompt("Introduzca localidad:");
var edad =  parseInt(prompt("Introduzca edad:"));

if(localidad=="Madrid" && edad>=18 && edad<=30)
    document.write("Puede acceder al carnet de empresarios emprendedores");
else
document.write("No puede acceder al carnet de empresarios emprendedores");