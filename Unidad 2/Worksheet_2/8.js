/* 
    8. Crea una web en la que cada vez que se accede se muestre una imagen(de modo aleatorio) de entre 3 posibles
*/


var numeroAleatorio = Math.floor(Math.random()*(3)+1);
document.write("<img src=\"images/"+numeroAleatorio+".png\">");