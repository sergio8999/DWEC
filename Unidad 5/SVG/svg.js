/* 
    Debes crear una web, que haciendo uso de SVG, muestre una bola en movimiento por la pantalla. Debe desplazarse tanto en X como en Y, 
    y rebotar al llegar a los límites del area definida por el tag SVG.
    Una vez conseguido, modifica el código para animar 3 bolas simultáneamente.
    Crea una clase bola, que teniendo en cuenta lo observado en los ejercicios anteriores, modele una bola en movimiento como las anteriores. 
    Haciendo uso de la clase, crea 100 bolas, cada una con un color y una dirección aleatoria, y haz que se animen simultaneamente
*/

var posXBola1 = 30, posYBola1 = 30, incXBola1 = 3, incYBola1 = 6;
var posXBola2 = 500, posYBola2 = 200, incXBola2 = 3, incYBola2 = 6;
var posXBola3 = 400, posYBola3 = 500, incXBola3 = 3, incYBola3 = 6;
var bola4;
var nBolas = 4;
function main(){
    setInterval(moverBola,23);

}

function moverBola(){
    let distanciaBola12 = Math.sqrt(Math.pow((posXBola1 - posXBola2), 2) + Math.pow((posYBola1 - posYBola2), 2));
    let distanciaBola23 = Math.sqrt(Math.pow((posXBola2 - posXBola3), 2) + Math.pow((posYBola2 - posYBola3), 2));
    let distanciaBola13 = Math.sqrt(Math.pow((posXBola1 - posXBola3), 2) + Math.pow((posYBola1 - posYBola3), 2));
    let bola2 = document.getElementById("bola2");
    let bola = document.getElementById("bola");
    let bola3 = document.getElementById("bola3");
    

    if(posXBola1 >=600-20 || posXBola1 <= 0+20 || distanciaBola12<= parseInt(bola.getAttribute("r"))+parseInt(bola2.getAttribute("r")) 
    || distanciaBola13<= parseInt(bola.getAttribute("r"))+parseInt(bola3.getAttribute("r")))
        incXBola1 *=-1;
    if(posYBola1 >=600-20 || posYBola1 <=  0+20 || distanciaBola12<= parseInt(bola.getAttribute("r"))+parseInt(bola2.getAttribute("r"))
    || distanciaBola13<= parseInt(bola.getAttribute("r"))+parseInt(bola3.getAttribute("r")))
        incYBola1 *= -1;

    if(posXBola2 >=600-20 || posXBola2 <= 0+20 || distanciaBola23<= parseInt(bola2.getAttribute("r"))+parseInt(bola3.getAttribute("r")) 
    || distanciaBola12<= parseInt(bola.getAttribute("r"))+parseInt(bola2.getAttribute("r")))
        incXBola2 *=-1;
    if(posYBola2 >=600-20 || posYBola2 <=  0+20 || distanciaBola23<= parseInt(bola2.getAttribute("r"))+parseInt(bola3.getAttribute("r")) 
    || distanciaBola12<= parseInt(bola.getAttribute("r"))+parseInt(bola2.getAttribute("r")))
        incYBola2 *= -1;
   
    if(posXBola3 >=600-20 || posXBola3 <= 0+20 || distanciaBola23<= parseInt(bola2.getAttribute("r"))+parseInt(bola3.getAttribute("r")) 
    || distanciaBola13<= parseInt(bola.getAttribute("r"))+parseInt(bola3.getAttribute("r")))
        incXBola3 *=-1;
    if(posYBola3 >=600-20 || posYBola3 <=  0+20 || distanciaBola23<= parseInt(bola2.getAttribute("r"))+parseInt(bola3.getAttribute("r")) 
    || distanciaBola13<= parseInt(bola.getAttribute("r"))+parseInt(bola3.getAttribute("r")))
        incYBola3 *= -1;

    bola.setAttribute("cx",posXBola1);
    bola.setAttribute("cy",posYBola1);
    posXBola1 += incXBola1;
    posYBola1 += incYBola1;

    bola2.setAttribute("cx",posXBola2);
    bola2.setAttribute("cy",posYBola2);
    posXBola2 += incXBola2;
    posYBola2 += incYBola2;
    
    bola3.setAttribute("cx",posXBola3);
    bola3.setAttribute("cy",posYBola3);
    posXBola3 += incXBola3;
    posYBola3 += incYBola3;   
}

window.addEventListener('load',main);