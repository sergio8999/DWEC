var textoAjax;

function main(){


}

window.addEventListener('load',main);

function ejercicio1(cadena){
    let contPAbiertos = 0;
    let contPCerrados = 0;
    let parentesisBien = true;

    for(let i=0;i<cadena.length;i++){
        if(cadena[i] == "("){
            contPAbiertos++;
        }else if(cadena[i] == ")"){
            contPCerrados++;
        }
        if(contPCerrados>contPAbiertos)
            parentesisBien = false;
    }

    if(contPAbiertos == contPCerrados && parentesisBien)
        return true;
    else
        return false;
}

function ejercicio2(arrayFechas,fechaInicio,fechaFin){
    let arrayFechasIncluidas = [];

    // value of para obtener el valor de la fecha
    let valorFechaInicio = new Date(fechaInicio).valueOf();
    let valorFechaFin = new Date(fechaFin).valueOf();

    for(let i=0;i<arrayFechas.length;i++){
        let valorFechaArray = new Date(arrayFechas[i]).valueOf();
        if(valorFechaArray >= valorFechaInicio && valorFechaArray <= valorFechaFin)
            arrayFechasIncluidas.push(arrayFechas[i]);
    }
    return arrayFechasIncluidas;
}


function ejercicio3(arrayEnteros){
    let multiplicacion=1;
    for(let i=0;i<arrayEnteros.length;i++)
        multiplicacion *= arrayEnteros[i];

    return multiplicacion;
}



function ejercicio4(filas,columnas,color,objetoDOM){

    let fila,columna;
    tabla = document.createElement('table');
    tabla.id = "tabla";

    for(let i=0;i<filas;i++){
        fila =document.createElement('tr');
        tabla.appendChild(fila);
        for(let j=0;j<columnas;j++){
            columna = document.createElement('td');
            //sin cargar AJAX
            columna.textContent = "Examen";
           /*  columna.textContent = texto; */
            if(i % 2 == 1)
                columna.style.backgroundColor = color;
            fila.appendChild(columna);
        }
    }
    objetoDOM.appendChild(tabla);
    eventoBorrar();
    guardarTabla();
}

function eventoBorrar(){
    let celdas = document.querySelectorAll("td");
    for (let celda of celdas) {
        celda.addEventListener('click', () =>{
            celda.textContent ="";
        });
    }
}

function guardarTabla(){
    let arrayValores = [];
    let celdas = document.querySelectorAll("td");

    for(let celda of celdas)
        arrayValores.push(celda.textContent);
    localStorage.setItem('contenido',arrayValores);
}

function cargarAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            textoAjax = this.responseText;
      }
    };
    xhttp.open("GET", "textoEjecicio4.txt", true);
    xhttp.send();
  }