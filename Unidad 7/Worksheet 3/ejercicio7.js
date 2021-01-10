/* 
7. Crea un documento en el que se produzcan 4 animaciones mediante un botón y mediante un
segundo botón se elimine la cola de animaciones.
*/

function main(){
    $('button:eq(0)').on('click',animar);
    $('button:eq(1)').on('click',function(){
        $("div").stop(true);
    });
}


function animar(){
    $("div:eq(0)").animate({
        right:"30px",
    },4000);

    $("div:eq(1)").animate({
        left:"100px",
    },3000);

    $("div:eq(2)").animate({
        width: "+=50"
    },5000);
    
    $("div:eq(3)").animate({
        opacity: 0.4,
        width:"20%",
    },2000);
}
window.addEventListener('load',main);