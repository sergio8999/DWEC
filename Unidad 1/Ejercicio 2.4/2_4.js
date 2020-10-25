var celsius = parseInt(prompt("Introduzca grados Celcius:"));
var fahrenheit = parseInt(prompt("Introduzca grados Fahrenheit: "));
var celsiusToFahrenheit, fahrenheitToCelcius;

celsiusToFahrenheit = (celsius*9/5)+32;
fahrenheitToCelcius = (fahrenheit - 32)*5/9;

document.write(celsius + "ºC is "+ celsiusToFahrenheit + " ºF<br/>");
document.write(fahrenheit + "ºF is " + fahrenheitToCelcius + " ºC<br/>");