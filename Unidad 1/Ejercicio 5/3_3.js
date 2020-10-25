var edad = parseInt(prompt("Introduzca edad:"));

if(edad <= 5)
    document.write("Jardin de infancia");
else if (edad < 12)
    document.write("Primaria");
else if(edad < 17)
    document.write("ESO");
else if(edad < 22)
    document.write("Bachillerato o ciclo");
else
    document.write("Universidad");