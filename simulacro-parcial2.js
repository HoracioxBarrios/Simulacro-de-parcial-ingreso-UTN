/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica *
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/

function mostrar(){
    let nombreMascota;
    let edadMascota;
    let tipoDeMascota;
    let peso;
    let diagnostico;
    let vacuna;
    let flagEdadMaxConVacuna;
    let flagEdadMin
    let edadMaximaConVacuna;
    let nombreEdadMaximaConVacuna;
    let contadorCantMascotaSinVacunaConParasitos;
    let contadorGatos;
    let contadorPerros;
    let contadorHamsters;
    let tipoMascotaConMasproblemasDigestivos;
    let auxTipoMascota;
    let edadMinima;
    let nombreMascotaEdadMinima;
    let diagnosticoMascotaEdadMin;
    let ContadorPerrosOtitis;
  


    flagEdadMaxConVacuna = true;
    flagEdadMin = true;
    contadorCantMascotaSinVacunaConParasitos = 0;
    contadorGatos = 0;
    contadorPerros = 0;
    contadorHamsters = 0;
    ContadorPerrosOtitis = 0;
    
    

    do {
        nombreMascota = prompt("Ingrese nombre de la mascota");

        edadMascota = prompt("Ingrese la edad");
        edadMascota = parseInt(edadMascota);
        while(edadMascota <= 0 || edadMascota > 20 || isNaN(edadMascota)){
            edadMascota = prompt("Incorrecto! - Ingrese la edad");
            edadMascota = parseInt(edadMascota);
        }

        tipoDeMascota = prompt("ingrese tipo de mascota:  1)gato,- 2)perro - 3)hamster");
        tipoDeMascota = parseInt(tipoDeMascota);
        while(tipoDeMascota <= 0 || tipoDeMascota > 3 || isNaN(tipoDeMascota)){
            tipoDeMascota = prompt("Incorrecto! - ingrese tipo de mascota:  1)gato,- 2)perro - 3)hamster ");
            tipoDeMascota = parseInt(tipoDeMascota);
        }

        peso = prompt("ingrese peso ");
        peso = parseFloat(peso);
        while(peso <= 0){
            peso = prompt("ingrese peso ");
            peso = parseFloat(peso);
        }

        diagnostico = prompt("ingrese diagnostico: 1)problemas digestivos - 2)otitis - 3)alergias en la piel -  4)parasitos - 5)picadura");
        diagnostico = parseInt(diagnostico);
        while(diagnostico <= 0 || diagnostico > 5){
            diagnostico = prompt("Icorrecto! - ingrese diagnostico: 1)problemas digestivos - 2)otitis - 3)alergias en la piel -  4)parasitos- 5)picadura");
            diagnostico = parseInt(diagnostico);
        }

        vacuna = prompt("Vacuna antirrabica - Ingrese 'si' / 'no' ");
        vacuna = vacuna.toLowerCase();
        while(vacuna != "si" && vacuna != "no"){
            vacuna = prompt("Incorrecto! - Vacuna antirrabica Ingrese 'si' / 'no' ");
            vacuna = vacuna.toLowerCase();
        }

        //tipo de mascota
        if(tipoDeMascota == 1){
            tipoDeMascota = "gato";
        }else{
            if(tipoDeMascota == 2) {
                tipoDeMascota = "perro";
            }else{
                tipoDeMascota = "hamster";
            }
        }


        //diagnostico
        switch(diagnostico){
            case 1:
                diagnostico = "problemas digestivos";
                if(tipoDeMascota == "gato"){
                    contadorGatos ++;
                    auxTipoMascota = tipoDeMascota;
                }else{
                    if(tipoDeMascota == "perro"){
                        contadorPerros ++;
                        auxTipoMascota = tipoDeMascota;
                    }else{
                        contadorHamsters ++;
                        auxTipoMascota = tipoDeMascota;
                    }
                }
                break;
            case 2:
                diagnostico = "otitis";
                    if(tipoDeMascota == "perro"){
                        ContadorPerrosOtitis ++;
                    }
                break;
            case 3:
                diagnostico = "Alergias de la piel";
                break;
            case 4:
                diagnostico = "parasitos";
                break;
            default:
                diagnostico = "picadura";
        }


        // max y min

        if(flagEdadMaxConVacuna == true && vacuna == "si"){//a) Nombre de la mascota más vieja con la vacuna antirrábica
            nombreEdadMaximaConVacuna = nombreMascota; 
            edadMaximaConVacuna = edadMascota;
            flagEdadMaxConVacuna = false;
        }else {
            if(edadMascota > edadMaximaConVacuna){
                edadMaximaConVacuna = edadMascota;
                nombreEdadMaximaConVacuna = nombreMascota;
            }
        }

        if(flagEdadMin == true){//d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
            edadMinima = edadMascota;
            nombreMascotaEdadMinima = nombreMascota; 
            diagnosticoMascotaEdadMin = diagnostico;
            flagEdadMin = flase;
        }else {
                if(edadMascota < edadMinima){
                edadMinima = edadMascota;
                nombreMascotaEdadMinima = nombreMascota;
                diagnosticoMascotaEdadMin = diagnostico;
                }
        }
        

        //b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
        if(vacuna == "si" && diagnostico == "parasitos"){
            contadorCantMascotaSinVacunaConParasitos ++;
        }
        
        respuesta = confirm("desea continuar ingresando?");
    } while (respuesta);

    //c) El tipo de mascota con más ingresos por problemas digestivos.
    if(contadorGatos > contadorPerros && contadorGatos > contadorHamsters){
        tipoMascotaConMasproblemasDigestivos = auxTipoMascota; //gatos
    }else{
        if(contadorPerros > contadorGatos && contadorPerros > contadorHamsters){
            tipoMascotaConMasproblemasDigestivos = auxTipoMascota;//perros
        }else {
            if(contadorHamsters > contadorGatos && contadorHamsters > contadorPerros){
                tipoMascotaConMasproblemasDigestivos = auxTipoMascota // hamster
            }else {
                tipoMascotaConMasproblemasDigestivos = "No hay uno por arriba de otro"; // si hay empate entre dos por ejemplo
            }
        
        }
    }
        

  
   document.write("Nombre de la mascota más vieja con la vacuna antirrábica  " + nombreEdadMaximaConVacuna + "</br>"
    + "su edad: " + edadMaximaConVacuna + "</br>"
    + "Cantidad de mascotas sin vacuna antirrábica y con parásitos " + contadorCantMascotaSinVacunaConParasitos + "</br>"
    + "El tipo de mascota con más ingresos por problemas digestivos " + tipoMascotaConMasproblemasDigestivos + "</br>"
    + "Gatos con problema digest: " + contadorGatos + " perros con problema digest " + contadorPerros +" hamsters con problema digest " + contadorHamsters + "</br>"
    + "Nombre de la mascota más joven:" + nombreMascotaEdadMinima + " su edad: " + edadMinima + " su diagnostico " + diagnosticoMascotaEdadMin + "</br>"
    + "Cantidad de perros con Otitis: " + ContadorPerrosOtitis);

   
} //fin de la funcion

