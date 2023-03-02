/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
  
Ejercicio 1
***************
La Premier League de Inglaterra necesita un sistema capaz de reunir las 
estadisticas de los jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.

*******************************************************************************/

function mostrar(){
    let nombre;
    let nacionalidad;
    let posicion;
    let tarjetasRojas;
    let golMarcado;
    let nombreMaxGoleador;
    let maxGol;
    let flag;
    let minRojasRecibidas;
    let JugadorMenosRojasRecibidas;
    let nacionalidadJugadorMenosRojasRecibidas;
    let porcentajeJugadoresIngleses;
    let respuesta;
    

    flag= true;

   
    do {

        nombre = prompt("Ingrese nombre del jugador");
        //asi esria bien la validacion, aunque no es algo que se nos va a evaluar si ingresa un numero en este caso.
        /* 
        while(!isNaN(nombre)){// si el user ingresa un numero isNaN devuelve false, entonces niego para que sea verdadero y pida el nombre que es string
            nombre = prompt("Incorrecto! - Ingrese nombre del jugador");
        }
        */
        nacionalidad = prompt("Ingrese nacionalidad");
        
    
        posicion = prompt("Posición (Arquero, Defensor, Mediocampista o Delantero)");
        posicion = posicion.toLowerCase();
        // valido la posicion
        while(posicion != "arquero" && posicion != "defensor" 
        && posicion != "mediocampista" && posicion != "delantero"){
            posicion = prompt("Incorrecto! - Posición (Arquero, Defensor, Mediocampista o Delantero)");
            posicion = posicion.toLowerCase(); 
        }
    
        tarjetasRojas = prompt("Cabtidad de tarjetas rojas recibidas");
        tarjetasRojas = parseInt(tarjetasRojas);
        while(tarjetasRojas < 0){// valido que no entren negativos
            tarjetasRojas = prompt("Incorrecto! - ingrese Cabtidad de tarjetas rojas recibidas");
            tarjetasRojas = parseInt(tarjetasRojas);  
        }
    
        golMarcado = prompt("ingrese Goles marcados");
        golMarcado = parseInt(golMarcado);
        while(golMarcado < 0){// valido que no entren negativos
            golMarcado = prompt("Numero Invalido ingrese Goles marcados");
            golMarcado = parseInt(golMarcado);
        }
    
        if(flag){
            maxGol = golMarcado;
            nombreMaxGoleador = nombre;
            minRojasRecibidas = tarjetasRojas;
            flag = false;
        }else {
            if(golMarcado > maxGol){
                maxGol = golMarcado;
                nombreMaxGoleador = nombre;//a)El goleador del torneo (nombre y max gol)
            }
            if(nacionalidad == "argentino"){
                if(tarjetasRojas < minRojasRecibidas){
                    minRojasRecibidas = tarjetasRojas;
                    JugadorMenosRojasRecibidas = nombre;//b)El jugador Argentino con menos rojas recibidas.
                }
                

            }
        }
        respuesta = confirm("Quiere continuar ingresando?")
    }while(respuesta);
   
   

}


 