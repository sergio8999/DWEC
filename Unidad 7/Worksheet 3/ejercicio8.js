/* 
8. Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados,
establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente.
*/  

function main(){

    $("div:eq(0)").fadeIn("slow");
    $("div:eq(1)").fadeIn("fast");
    $("div:eq(2)").fadeIn(800);
    $("div:eq(3)").fadeIn(2000);
    $("div:eq(4)").fadeIn(4000);
}

window.addEventListener('load',main);