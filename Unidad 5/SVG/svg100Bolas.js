var bolas =[];
var nBolas = 0;
function main(){

    for(let i=0;i<100;i++){
        bolas.push(new Bola(posicionRamdon(5,600),posicionRamdon(5,600),5,colorRGB()));
        añadirBolaVG(bolas[i]);
    }
    setInterval(moverBola,23);
}
/**
 * 
 * @param {Bola} bola 
 */


function colorRGB(){
	var coolor = "("+posicionRamdon(0,255)+"," + posicionRamdon(0,255) + "," + posicionRamdon(0,255) +")";
	return "rgb" + coolor;
}

function posicionRamdon(max,min){
    return Math.random() * (max - min) + min;
}

function moverBola(){
    for(let bola of bolas){
        if(bola.x >= (600-bola.radio) || bola.x <= (0+bola.radio))
            bola.incX *=-1;
        if(bola.y >= (600-bola.radio) || bola.y <= (0+bola.radio))
            bola.incY *= -1;
        document.getElementById(bola.codBola).setAttribute("cx",bola.x);
        document.getElementById(bola.codBola).setAttribute("cy",bola.y);
        bola.x += bola.incX;
        bola.y += bola.incY;
    }
 }

function añadirBolaVG(bola){
    let newCircle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.id = bola.codBola;
    newCircle.setAttribute("cx",bola.x);
    newCircle.setAttribute("cy",bola.y);
    newCircle.setAttribute("r",bola.radio);
    newCircle.setAttribute("fill",bola.color);
    document.getElementsByTagName("svg")[0].appendChild(newCircle);
    nBolas++;
}

class Bola{
    constructor(x,y,radio,color){
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
        this.incX = 3;
        this.incY = 6;
        this.codBola = "bola"+nBolas;
    }
}

window.addEventListener('load',main);