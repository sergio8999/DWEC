function mover(eventoRaton){
    if(eventoRaton.ctrlKey)
        eventoRaton.target.style.backgroundColor="red";
    else if(eventoRaton.shiftKey)
        eventoRaton.target.style.backgroundColor="blue";
}

function main(){
    tabla = "";
    tabla += "<table>";
    for(i=0;i<10;i++){
        tabla += "<tr>";
        for(j=0;j<10;j++)
            tabla += "<td onmousemove='mover(event)' height=\"100\" width=\"100\" style=\"border: 1px solid black;\"></td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;
} 

