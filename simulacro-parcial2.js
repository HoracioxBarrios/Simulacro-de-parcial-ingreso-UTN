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

a) Nombre de la mascota más vieja con la vacuna antirrábica ******** ok
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/
function mostrar(){
    let nombreMascota;
    let edadMascota;
    let tipoMascota;
    let pesoMascota;
    let diagnostico;
    let vacuna;
    let respuesta;
    
    let nombreMascotaMasViejaConVacuna;
    let flagMascotaMasViejaconVacuna;
    let contadorSinVacunaConParasitos;
    let contadorPerroDigestivos;
    let contadorGatosDigestivos;
    let contadorHamstersDigestivos;
    let mascotaMaximoIngresoDigestivo;

    flagMascotaMasViejaconVacuna = true;
    contadorSinVacunaConParasitos = 0;
    contadorGatosDigestivos = 0;
    contadorPerroDigestivos = 0;
    contadorHamstersDigestivos = 0;

    do{
        //obtenemos nombre
        nombreMascota = prompt("Ingrese nombre de mascota");

        //obtenemos edad de mascota y validamos
        edadMascota = prompt("ingrese edad de mascota de 1 a 20");
        edadMascota = parseInt(edadMascota);
        while(edadMascota <= 0 || edadMascota > 20){
            edadMascota = prompt("Edad Invalida! ingrese edad de mascota de 1 a 20");
            edadMascota = parseInt(edadMascota);
        }

        //obtenemos tipo de mascota y validamos - usamos if
        tipoMascota = prompt("ingrese tipo de mascota: 1)gato, 2)perro, 3)hamster");
        tipoMascota = parseInt(tipoMascota);
        while(tipoMascota <= 0 || tipoMascota > 3){
            tipoMascota = prompt("Incorrecto! ingrese tipo de mascota: 1)gato, 2)perro, 3)hamster");
            tipoMascota = parseInt(tipoMascota);
        }

        // obtenemos peso y vlidamos
        pesoMascota = prompt("ingrese peso de mascota ");
        pesoMascota = parseFloat(pesoMascota);
        while(pesoMascota <= 0 ){
            pesoMascota = prompt("Invalido! ingrese peso de mascota");
            pesoMascota = parseFloat(pesoMascota);
        }

        // obtenemos diagnostico y validamos - usamos switch
        diagnostico = prompt("Diagnostico: 1)Problemas digestivos, 2) Otitis, 3) Alergias en la piel, 4) Parasitos, 5) Picaduras");
        diagnostico = parseInt(diagnostico);
        while(diagnostico <= 0 || diagnostico > 5){
            diagnostico = prompt("Incorrecto! - Diagnostico: 1)Problemas digestivos, 2) Otitis, 3) Alergias en la piel, 4) Parasitos, 5) Picaduras");
            diagnostico = parseInt(diagnostico);
        }

        // obtenemos vacuna SI o NO
        vacuna = prompt("Esta vacunado? si o no");
        vacuna = vacuna.toLowerCase();
        while(vacuna != "si" && vacuna != "no"){
            vacuna = prompt("Esta vacunado? si o no");
            vacuna = vacuna.toLowerCase();
        }



        //segun el valor ingresado ,defino el tipo de mascota.
        if(tipoMascota == 1){
            tipoMascota = "Gato";
        }else{
            if(tipoMascota == 2){
                tipoMascota = "Perro";
            }else{
                tipoMascota = "Hamster";
            }
        }

        //uso un switch para cada caso de Diagnostico
        switch(diagnostico){
            case 1:
                diagnostico = "Problemas digestivos";
                if(tipoMascota == "Gato"){
                    contadorGatosDigestivos ++;
                }else{
                    if(tipoMascota == "Perro"){
                        contadorPerroDigestivos ++;
                    }else{
                        contadorHamstersDigestivos ++;
                    }
                }
                break;
            case 2:
                diagnostico = "Otitis";
                break;
            case 3:
                diagnostico = "Alergias en la piel";
                break;
            case 4:
                diagnostico = "Parasitos";
                break;
            default:
                diagnostico = "Picaduras";
        }
        //-------------------------------------------------------
        //a) Nombre de la mascota más vieja con la vacuna antirrábica
        if(vacuna == "si"){
            if(flagMascotaMasViejaconVacuna == true ){
                nombreMascotaMasViejaConVacuna = nombreMascota;
            }else{
                if(nombreMascota > nombreMascotaMasViejaConVacuna){
                    nombreMascotaMasViejaConVacuna = nombreMascota;
                }
            }
        }else{// entonces vacuna es "No"    /b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
            if(diagnostico == "Parasitos"){
                contadorSinVacunaConParasitos ++;
            }
        }
        
        
        

        



        respuesta = confirm("Desea seguir ingresando Datos?");
    }while(respuesta == true);

    
    //c) El tipo de mascota con más ingresos por problemas digestivos.
    if(contadorGatosDigestivos > contadorPerroDigestivos && contadorGatosDigestivos > contadorHamstersDigestivos){
        mascotaMaximoIngresoDigestivo = tipoMascota;
    }else{
        if(contadorPerroDigestivos > contadorGatosDigestivos && contadorPerroDigestivos > contadorHamstersDigestivos){
            mascotaMaximoIngresoDigestivo = tipoMascota;
        }else{
            if(contadorHamstersDigestivos > contadorGatosDigestivos && contadorHamstersDigestivos > contadorPerroDigestivos){
                mascotaMaximoIngresoDigestivo = tipoMascota;
            }else{
                mascotaMaximoIngresoDigestivo = "No hay un maximo";
            }
        }
        
    }


    document.write("Nombre de la mascota más vieja con la vacuna antirrábica: " + nombreMascotaMasViejaConVacuna + "</br>"
    + "Cantidad de mascotas sin vacuna antirrábica y con parásitos: " + contadorSinVacunaConParasitos + "</br>"
    + "El tipo de mascota con más ingresos por problemas digestivos: " + mascotaMaximoIngresoDigestivo + "</br>")

    }//fin
    

    /*a) Nombre de la mascota más vieja con la vacuna antirrábica 
    b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
    c) El tipo de mascota con más ingresos por problemas digestivos.
    
    d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
    e) Cantidad de perros ingresados por otitis. */









































































/*
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
        //nombre de mascota
        nombreMascota = prompt("Ingrese nombre de la mascota");
        //edad de mascota
        edadMascota = prompt("Ingrese la edad");
        edadMascota = parseInt(edadMascota);
        while(edadMascota <= 0 || edadMascota > 20 || isNaN(edadMascota)){
            edadMascota = prompt("Incorrecto! - Ingrese la edad");
            edadMascota = parseInt(edadMascota);
        }
        //tipo de mascota
        tipoDeMascota = prompt("ingrese tipo de mascota:  1)gato,- 2)perro - 3)hamster");
        tipoDeMascota = parseInt(tipoDeMascota);
        while(tipoDeMascota <= 0 || tipoDeMascota > 3 || isNaN(tipoDeMascota)){
            tipoDeMascota = prompt("Incorrecto! - ingrese tipo de mascota:  1)gato,- 2)perro - 3)hamster ");
            tipoDeMascota = parseInt(tipoDeMascota);
        }
        //peso de la mascota
        peso = prompt("ingrese peso ");
        peso = parseFloat(peso);
        while(peso <= 0){
            peso = prompt("ingrese peso ");
            peso = parseFloat(peso);
        }
        //diagnostico
        diagnostico = prompt("ingrese diagnostico: 1)problemas digestivos - 2)otitis - 3)alergias en la piel -  4)parasitos - 5)picadura");
        diagnostico = parseInt(diagnostico);
        while(diagnostico <= 0 || diagnostico > 5){
            diagnostico = prompt("Icorrecto! - ingrese diagnostico: 1)problemas digestivos - 2)otitis - 3)alergias en la piel -  4)parasitos- 5)picadura");
            diagnostico = parseInt(diagnostico);
        }
        //vacuna
        vacuna = prompt("Vacuna antirrabica - Ingrese 'si' / 'no' ");
        vacuna = vacuna.toLowerCase();
        while(vacuna != "si" && vacuna != "no"){
            vacuna = prompt("Incorrecto! - Vacuna antirrabica Ingrese 'si' / 'no' ");
            vacuna = vacuna.toLowerCase();
        }

        //tipo de mascota - asignamos valores
        if(tipoDeMascota == 1){
            tipoDeMascota = "gato";
        }else{
            if(tipoDeMascota == 2) {
                tipoDeMascota = "perro";
            }else{
                tipoDeMascota = "hamster";
            }
        }
        

        //diagnostico - 
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
            flagEdadMin = false;
        }else {
                if(edadMascota < edadMinima){
                edadMinima = edadMascota;
                nombreMascotaEdadMinima = nombreMascota;
                diagnosticoMascotaEdadMin = diagnostico;
                }
        }
        

        //b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
        if(vacuna == "no" && diagnostico == "parasitos"){
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

*/