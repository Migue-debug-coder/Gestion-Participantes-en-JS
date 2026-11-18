let set_participantes = new Set();
let validacion = false;

do{
    const opcion = window.prompt("Bienvenido al Gestor de Notas,¿Que desea Realizar?: \n" +
        "A. Inscribir un participante \n" +
        "B. Dar de baja un participante \n" +
        "C. Comprobar inscripción \n" +
        "D. Mostrar participantes \n" +
        "E. Vaciar inscripciones: Eliminar todos los participantes del conjunto. \n" +
        "F. Salir \n"
    ).toUpperCase();

    switch (opcion){
        case "A":
           set_participantes.add(introduceNombre());
            break;
        case "B":
            let nombre = introduceNombre();
            if(!set_participantes.has(nombre)){
                window.alert("El nombre introducido no se encuentra en el conjunto");
            }else{
                set_participantes.delete(nombre);
                window.alert(`El participante ${nombre} ha sido eliminado del conjunto`);
            }
            break;
        case "C":
            if(set_participantes.has(introduceNombre())){
                window.alert("El participante introducido está inscrito");
            }else{
                window.alert("El participante introducido no está inscrito")
            }
            
    }
}while(!validacion);

function introduceNombre(){
    const nombre = window.prompt("Introduzca el nombre del participante: ");
    return nombre;
}