/*Crear una función encontrar el número, que reciba por parámetros un array de números y un número. 
La función deberá evaluar si el número proporcionado existe o no en el array. */
function encontrar(array,numero){
    if(array.includes(numero) === true){
        return "El número " + numero + " sí existe en el array";
    }return "El valor solicitado no existe"
}console.log(encontrar([10, 30, 20, 50, 40, 45], 20))

console.log("-----------------")
/*Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares. */
function sumatoria(array) {
    let sumaPares = 0;
    let sumaImpares = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        sumaPares += array[i];
      } else {
        sumaImpares += array[i];
      }
    }
    return (
      "La sumatoria de los pares es: " +
      sumaPares +
      " y la sumatoria de los impares es: " +
      sumaImpares
    );
}console.log(sumatoria([1, 2, 3, 4, 5]));
  