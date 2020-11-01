// Roshambo

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ganadas = 0;
        this.perdidas = 0;      
    }
    get movimiento(){
        let aleatorio = Math.floor(Math.random()*3 + 1);
        let resultado;
        if(aleatorio == 1)
            resultado = "piedra";
        else if(aleatorio == 2)
            resultado = "papel";
        else
            resultado = "tijera";
        return resultado;
    }
}

class Juego{
    constructor(jugador1,jugador2){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.totalPartidas = 0;
    }

    jugarPartida(){        
        let movimientoJugador1 = this.jugador1.movimiento;
        let movimientoJugador2 = this.jugador2.movimiento;
        let resultado;

        if(movimientoJugador1 == "tijera" && movimientoJugador2 == "tijera"){
            resultado = "empate";
            this.totalPartidas++;
            console.log("Empate");
        }else if(movimientoJugador1 == "tijera" && movimientoJugador2 == "papel"){
            resultado = "Jugador 1";
            this.jugador1.ganadas++;
            this.jugador2.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 1");
        }else if(movimientoJugador1 == "tijera" && movimientoJugador2 == "piedra"){
            resultado = "Jugador 2";
            this.jugador2.ganadas++;
            this.jugador1.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 2");
        }

        if(movimientoJugador1 == "papel" && movimientoJugador2 == "papel"){
            resultado = "empate";
            console.log("Empate");
        }else if(movimientoJugador1 == "papel" && movimientoJugador2 == "tijera"){
            resultado = "Jugador 2";
            this.jugador2.ganadas++;
            this.jugador1.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 2");
        }else if(movimientoJugador1 == "papel" && movimientoJugador2 == "piedra"){
            resultado = "Jugador 1";
            this.jugador1.ganadas++;
            this.jugador2.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 1");
        }

        if(movimientoJugador1 == "piedra" && movimientoJugador2 == "piedra"){
            resultado = "empate";
            this.totalPartidas++;
            console.log("Empate");
        }else if(movimientoJugador1 == "piedra" && movimientoJugador2 == "papel"){
            resultado = "Jugador 2";
            this.jugador2.ganadas++;
            this.jugador1.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 2");
        }else if(movimientoJugador1 == "piedra" && movimientoJugador2 == "tijera"){
            resultado = "Jugador 1";
            this.jugador1.ganadas++;
            this.jugador2.perdidas++;
            this.totalPartidas++;
            console.log("Ganador jugador 1");
        }
        return resultado;
    }
}