var hermanos = parseInt(prompt("Introduzca hermanos:"));
var cantidad = parseFloat(prompt("Introduzca cantidad:"));

if(hermanos == 0)
    document.write(cantidad);
else if (hermanos >=3)
    document.write(cantidad*0.85);
else
    document.write(cantidad*0.95);