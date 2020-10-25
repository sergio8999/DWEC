var examen1 = parseFloat(prompt("Introduzca nota examen 1:"));
var examen2 = parseFloat(prompt("Introduzca nota examen 2:"));
var trabajo1 = parseFloat(prompt("Introduzca nota trabajo 1:"));
var trabajo2 = parseFloat(prompt("Introduzca nota trabajo 2:"));
var media;

if(examen1 <4.5 && examen2 <4.5 && trabajo1 < 4.5 && trabajo2 < 4.5)
    document.write("La nota en uno o mas trabajos esta por debajo de 4,5");
else{
    media = (examen1+examen2)/2*0.75+(trabajo1+trabajo2)/2*0.25;
    if(media>=5)
        document.write("La nota media es superior a 5");
    else
        document.write("La nota media es inferior a 5");
}
    