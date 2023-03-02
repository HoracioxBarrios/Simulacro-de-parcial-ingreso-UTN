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
    let flagViejoConVacuna;
    let edadMascotaMasViejaConVacuna;
    let nombreMascotaMasViejaConVacuna;
    let contadorCantMascotaSinVacunaConParasitos;
  


    flagViejoConVacuna = true;
    contadorCantMascotaSinVacunaConParasitos = 0;
    
    

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
                break;
            case 2:
                diagnostico = "otitis";
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
        //a) Nombre de la mascota más vieja con la vacuna antirrábica
        if(flagViejoConVacuna == true && vacuna == "si"){
            nombreMascotaMasViejaConVacuna = nombreMascota;
            edadMascotaMasViejaConVacuna = edadMascota;
            flagViejoConVacuna = false;
        }else {
            if(edadMascota > edadMascotaMasViejaConVacuna && vacuna == "si"){
                edadMascotaMasViejaConVacuna = edadMascota;
                nombreMascotaMasViejaConVacuna = nombreMascota;
            }
        }
        
        //b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
        if(vacuna == "si" && diagnostico == "parasitos"){
            contadorCantMascotaSinVacunaConParasitos ++;
        }
        respuesta = confirm("desea continuar ingresando?");
    } while (respuesta);

   alert("Nombre de la mascota más vieja con la vacuna antirrábica  " + nombreMascotaMasViejaConVacuna + "\n"
    + " su edad: " + edadMascotaMasViejaConVacuna + " Tiene vacuna?: " + vacuna + "\n"
    + "Cantidad de mascotas sin vacuna antirrábica y con parásitos" + contadorCantMascotaSinVacunaConParasitos + "\n"
    );
} //fin de la funcion
