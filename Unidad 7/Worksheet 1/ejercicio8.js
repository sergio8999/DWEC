/* 
8. Crea una web simulando una serie de noticias (3 divs con el texto de la noticia y sobre cada uno
su título correspondiente). Mediante JQuery
    a) Cambia el tamaño de fuente de las noticias (3 tamaños).
    b) Al pulsar sobre cada título se debe mostrar u ocultar ésta.
    c) Al colocar el ratón sobre el texto de la noticia debe cambiar el color de fondo de ésta.
    d) Completa el apartado c) haciendo que al salir el ratón se vuelva a su color original el
    fondo.
*/

function main(){
    // a)
    $("p:eq(0)").css("font-size","1rem");
    $("p:eq(1)").css("font-size","1.2rem");
    $("p:eq(2)").css("font-size","1.4rem");

    // b)
    $("h3").on('click',function(){
        $(this).hide();
    })

    //c) y d)
    $("div").hover(function(){
        $(this).css("background-color","lightblue");
    },function(){
        $(this).css("background-color","initial");
    })
}

window.addEventListener('load',main);