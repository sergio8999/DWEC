/* 
    5. Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y el método setTimeout() crea un reloj que se actualize cada segundo,
*/

function horaActual(){
    let fecha = new Date();
    console.log(fecha.getHours()+ ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    setTimeout(horaActual,1000);
}

setTimeout(horaActual,1000);