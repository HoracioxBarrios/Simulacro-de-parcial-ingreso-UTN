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

a) Nombre de la mascota más vieja con la vacuna antirrábica
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

    nombreMascota = prompt("Ingrese nombre de la mascota");

    edadMascota = prompt("Ingrese la edad");
    edadMascota = parseInt(edadMascota);
    while(edadMascota < 0 || edadMascota > 20){
        edadMascota = prompt("Ingrese la edad");
        edadMascota = parseInt(edadMascota); 
    }
    console.log(edadMascota);

    tipoDeMascota = prompt("ingrese tipo de mascota:  gato, perro, hamster");

    peso = prompt("ingrese peso ");

    diagnostico = prompt("ingrese diagnostico: problemas digestivos, otitis, alergias en la piel, parasitos");

    vacuna = prompt("Vacuna antirrabica 'si' / 'no' ");





}

