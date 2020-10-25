var radio = parseFloat(prompt("Enter radius: "));

document.write("Thea circumference is " + calcCircumfrence(radio) + "<br/>");
document.write("Thea area is " + calcArea(radio) + "<br/>");

function calcCircumfrence(radioC){
    return 2*Math.PI*radioC;
}

function calcArea(radioC){
    return Math.PI*Math.pow(radioC,2);
}
