function convertirMayuscula(palabraMinuscula){
	return palabraMinuscula.toUpperCase()
}console.log("La palabra gato en mayuscula es: "+ convertirMayuscula('gato'))

//

function tipoDato(tipo){
	return typeof(tipo)
}console.log("El TIPO de dato ingresado es: " + tipoDato("hola"))

//

function edadCanina(edadPerro){
	return edadPerro * 7
}console.log("La edad del perro es igual a " + edadCanina(2) + " años humanos")

//
function horaTrabajo(salario,dia,hora){
	return (salario / dia) / hora
}console.log("El trabajador cobra $" + horaTrabajo(100, 12, 8)+ " por sus horas de trabajo")