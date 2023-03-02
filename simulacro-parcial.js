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

function mostrar() {
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
    let respuesta;
    let contadorGeneral;
    let contadorIngleses;
    let procentajeDeIngleses;


    flag = true;
    contadorGeneral = 0;
    contadorIngleses = 0;


    do{

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
        while (posicion != "arquero" && posicion != "defensor"
            && posicion != "mediocampista" && posicion != "delantero"){
            posicion = prompt("Incorrecto! - Posición (Arquero, Defensor, Mediocampista o Delantero)");
            posicion = posicion.toLowerCase();
        }

        tarjetasRojas = prompt("Cabtidad de tarjetas rojas recibidas");
        tarjetasRojas = parseInt(tarjetasRojas);//parseo
        while(tarjetasRojas < 0){// valido que no entren negativos
            tarjetasRojas = prompt("Incorrecto! - ingrese Cabtidad de tarjetas rojas recibidas");
            tarjetasRojas = parseInt(tarjetasRojas);
        }

        golMarcado = prompt("ingrese Goles marcados");
        golMarcado = parseInt(golMarcado);//parseo
        while(golMarcado < 0){// valido que no entren negativos
            golMarcado = prompt("Numero Invalido ingrese Goles marcados");
            golMarcado = parseInt(golMarcado);
        }

        if (flag){// max y min 
            maxGol = golMarcado;
            nombreMaxGoleador = nombre;

            minRojasRecibidas = tarjetasRojas;
            flag = false;
        } else{
            if(golMarcado > maxGol){
                maxGol = golMarcado;
                nombreMaxGoleador = nombre;//a)El maximo goleador del torneo (nombre y goles)
            }
            if(nacionalidad == "argentino"){
                if (tarjetasRojas < minRojasRecibidas){
                    minRojasRecibidas = tarjetasRojas;
                    JugadorMenosRojasRecibidas = nombre;//b)El jugador Argentino con menos rojas recibidas.
                }
            }
        }

        if (nacionalidad == "inglaterra"){
            contadorIngleses++;
        }

        respuesta = confirm("Quiere continuar ingresando?")
        contadorGeneral++;
    }while(respuesta);

    //c)El porcentaje de jugadores Ingleses de la liga
    procentajeDeIngleses = (contadorIngleses * 100) / contadorGeneral;

    alert("El goleador del torneo: " + nombreMaxGoleador + " cantidad: " + maxGol
        + "El jugador argentino con menos rojas recibidas: " + JugadorMenosRojasRecibidas + "Cant. minimas rojas" + minRojasRecibidas
        + "Porcentaje de ingleses: " + procentajeDeIngleses);

}
/*regla de 3 simples para % jug ingleses
10  general  100
4 ingleses


resultado = (4 * 100) /10
 */

