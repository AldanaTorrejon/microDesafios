let perfil= "administrador";
switch (perfil){
    case "administrador" || "ADMINISTRADOR" || "Administrador":
        console.log("Usted tiene TODOS los privilegios de uso del sistema")
    break;
    case "asistente" || "ASISTENTE" || "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
    break;
    case "invitado" || "INVITADO" || "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos")
    break;
    case " ":
        console.log("Usted debe seleccionar un perfil de usuario")
    break;
    default:
        console.log("Debe especificar un perfil válido")
}