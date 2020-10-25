var radio = parseInt(prompt("Introduce radio:"));
var circunferencia, area;

circunferencia= 2*Math.PI*radio;
area=Math.PI*Math.pow(radio,2);

// Para redondear el valor de circunferencia a dos decimales seria circunferencia.toFixed(2)
document.write("La circunference is "+circunferencia+"<br/>");
document.write("The area is "+area+"<br/>");