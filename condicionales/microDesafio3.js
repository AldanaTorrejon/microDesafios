let palabra= "perro";
switch (palabra){
    case "perro" || "PERRO" || "Perro":
        console.log("La palabra "+palabra+" traducida al ingles es DOG")
    break;
    case "gato" || "GATO" || "Gato":
        console.log("La palabra "+palabra+" traducida al ingles es CAT")
    break;
    case "puerta" || "PUERTA" || "Puerta":
        console.log("La palabra "+palabra+" traducida al ingles es DOOR")
    break;
    case "ventana" || "VENTANA" || "Ventana":
        console.log("La palabra "+palabra+" traducida al ingles es WINDOW")
    break;
    case "mesa" || "MESA" || "Mesa":
        console.log("La palabra "+palabra+" traducida al ingles es TABLE")
    break;
    default:
        console.log("La palabra ingresa es incorrecta")
}