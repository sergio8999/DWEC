/* 
9. Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la
siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la
izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba.
*/

function main(){

    $("button:eq(0)").on('click',function(){
        $("div").fadeIn("slow").animate({
            left: "-=200"
        },4000).css("background-color","blue").slideUp("slow");
    })
    $("button:eq(1)").on('click',() =>{
        $("div").stop(true);
    })
}

window.addEventListener('load',main);