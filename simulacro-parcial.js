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
  let jugadorMenosRojasRecibidas;
  let respuesta;
  let contadorGeneral;
  let contadorIngleses;
  let procentajeDeIngleses;

  flag = true;
  contadorGeneral = 0;
  contadorIngleses = 0;

  do {

    nombre = prompt("Ingrese nombre del jugador");
    /* 
    while(!isNaN(nombre)){// si el user ingresa un numero isNaN devuelve false, entonces niego para que sea verdadero y pida el nombre que es string
    nombre = prompt("Incorrecto! - Ingrese nombre del jugador");
    }
    */

    // la nacionalidad la hice de este modo para que el usuario ingrese un numero y no tenga que escribir , argentina ,inglaterra,etc , y agregue "otro" como ejemplo abarcativo
    nacionalidad = prompt("Ingrese nacionalidad 1)argentino - 2)inglaterra - 3)otro");
    nacionalidad = parseInt(nacionalidad);
    while(nacionalidad < 1 || nacionalidad > 3 || isNaN(nacionalidad)){
      nacionalidad = prompt("Incorrecto! - Ingrese nacionalidad 1)argentino - 2)inglaterra - 3)otro");
      nacionalidad = parseInt(nacionalidad);
    }

    posicion = prompt("Ingrese Posición: 1)Arquero - 2)Defensor - 3)Mediocampista - 4)Delantero)");
    posicion = parseInt(posicion);
    // valido la posicion - // valido si estan fuera de rango num y si ingresa letras, pida dato correcto
    while(posicion < 1 || posicion > 4 || isNaN(posicion)){
      posicion = prompt("Incorrecto! - Ingrese Posición: 1)Arquero - 2)Defensor - 3)Mediocampista - 4)Delantero)");
      posicion = parseInt(posicion);
    }

    tarjetasRojas = prompt("Cantidad de tarjetas rojas recibidas");
    tarjetasRojas = parseInt(tarjetasRojas); //parseo
    while(tarjetasRojas < 0 || isNaN(tarjetasRojas)){
      // valido que no entren negativos y letras
      tarjetasRojas = prompt("Incorrecto! - ingrese Cantidad de tarjetas rojas recibidas");
      tarjetasRojas = parseInt(tarjetasRojas);
    }

    golMarcado = prompt("ingrese Goles marcados");
    golMarcado = parseInt(golMarcado); //parseo
    while(golMarcado < 0 || isNaN(golMarcado)) {
      // valido que no entren negativos y letras
      golMarcado = prompt("Incorrecto!- ingrese Goles marcados");
      golMarcado = parseInt(golMarcado);
    }

    //nacionalidad
    if(nacionalidad == 1){
      nacionalidad = "argentina";
    }else{
      if(nacionalidad == 2){
        nacionalidad = "inglaterra";
        contadorIngleses ++;
      }else{
        nacionalidad = "otra"; //
      }
    }

    //posicion
    switch (posicion) {
      case 1:
        posicion = "arquero";
        break;
      case 2:
        posicion = "defensor";
        break;
      case 3:
        posicion = "mediocampista";
        break;
      default:
        posicion = "delantero";
    }
    // maximo goleador, minimo en tarjetas rojas
    if(flag){
      minRojasRecibidas = tarjetasRojas; // max y min
      maxGol = golMarcado;

      jugadorMenosRojasRecibidas = nombre;
      nombreMaxGoleador = nombre;
      flag = false;
    }else{
      if(golMarcado > maxGol){
        maxGol = golMarcado;
        nombreMaxGoleador = nombre; //a)El maximo goleador del torneo (nombre y goles)
      }
      if(nacionalidad == "argentina" && tarjetasRojas < minRojasRecibidas) {
        minRojasRecibidas = tarjetasRojas;
        jugadorMenosRojasRecibidas = nombre; //b)El jugador Argentino con menos rojas recibidas.
      }
    }

    //pregunto si quiere seguir ingresando datos
    respuesta = confirm("Quiere continuar ingresando?");

    contadorGeneral++;

  }while(respuesta);

  //c) El porcentaje de jugadores Ingleses de la liga
  procentajeDeIngleses = contadorIngleses * 100 / contadorGeneral;

  alert(
    "El goleador del torneo: " + nombreMaxGoleador + " cantidad de goles: " + maxGol + "\n" 
    + "El jugador argentino con menos rojas recibidas: " + jugadorMenosRojasRecibidas + " Con " + minRojasRecibidas + " tarjeta roja" + "\n" 
    + "Porcentaje de ingleses: " + procentajeDeIngleses
  );

}// fin de la funcion

/*regla de 3 simples para % jug ingleses
10  general  100
4 ingleses


resultado = (4 * 100) /10
 */
