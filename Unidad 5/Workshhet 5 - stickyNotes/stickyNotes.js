var notas = {"listaNotas":[]};  // Crear array vacion JSON
var titulo,descripcion,fecha,contenedorDiv,notaMovimiento,sections;
var arrastrando = false;

function main(){

    contenedorDiv = document.getElementById('divNotas');
    titulo = document.getElementById('titulo');
    descripcion = document.getElementById('descripcion');

    cargarJSON();


    // Crear nota al pulsar el boton
    document.getElementById('botonEnviar').addEventListener('click',()=>{ 
        fecha = Date.now();
        notas.listaNotas.push({"titulo":titulo.value,"descripcion":descripcion.value,"fecha":fecha})
        let nota = notas.listaNotas[notas.listaNotas.length-1];
        dibujarNota(nota);
        document.getElementsByTagName('section')[notas.listaNotas.length-1].addEventListener('click',notaPulsada);
        limpiarTexto();
        localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
    });

    sections = document.querySelectorAll('section');
    sections.forEach(section => section.addEventListener('click',notaPulsada));
    window.addEventListener('mousemove',moverNota);




   /*  notas.listaNotas.splice(1,1);
    document.getElementsByTagName('section')[1].remove(); */
}


function notaPulsada(e){
    arrastrando = !arrastrando;
    notaMovimiento = e.currentTarget;
}

function moverNota(e){
    let contenedorDiv = document.getElementById('divNotas').getBoundingClientRect();
    let sectionNotas = document.querySelector('section').getBoundingClientRect();
    if(arrastrando){
        if(e.y > contenedorDiv.y && e.x < (contenedorDiv.width-sectionNotas.width)){
            notaMovimiento.style.left = e.x /* - 20  */+ "px";
            notaMovimiento.style.top = e.y /* - 20 */+ "px";
        }
    }
}

 function dibujarNota(nota){
    // Crear id
    let id = notas.listaNotas.length-1;

    let section = document.createElement('section');
    let labelTitulo = document.createElement('label');
    labelTitulo.textContent = "Titulo:";
    labelTitulo.setAttribute('for','tituloNota'+id);

    let input = document.createElement('input');
    input.value = nota.titulo;
    input.id = "tituloNota"+id;

    let divTextArea = document.createElement('div');
    divTextArea.style.display = "flex";
    divTextArea.style.flexDirection = "column";

    let labelDescripcion = document.createElement('label');
    labelDescripcion.textContent = "Descripcion:";
    labelDescripcion.setAttribute('for','descripcionNota'+id);

    let textArea = document.createElement('textarea');
    textArea.textContent = nota.descripcion;
    textArea.id = "descripcionNota"+id;

    let parrafo = document.createElement('p');
    parrafo.textContent="fecha";

    //Añadir a div
    contenedorDiv.appendChild(section);
    section.appendChild(labelTitulo);
    section.appendChild(input);
    section.appendChild(divTextArea);
    divTextArea.appendChild(labelDescripcion);
    divTextArea.appendChild(textArea);
    section.appendChild(parrafo);
}


function limpiarTexto(){
    titulo.value = "";
    descripcion.value = "";
}

function cargarJSON(){
    let notasJSON = JSON.parse(localStorage.getItem('listaNotas'));
    if(notasJSON != null)
    /* for(let i=0;i<notasJson.length;i++) */
    for(let notaJSON of notasJSON){
     //let nota = new Nota(notasJson[i].titulo,notasJson[i].descripcion);
     notas.listaNotas.push(notaJSON);
     dibujarNota(notaJSON);
    }
}

window.addEventListener('load',main);