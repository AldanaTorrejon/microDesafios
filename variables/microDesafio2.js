let nombre="Facundo"; let apellido ="Casaca";
let sueldoActual=10000; let porcentajeAumento=15
let calculoAumento= (sueldoActual+((sueldoActual*porcentajeAumento)/100));
let nuevoSueldo= calculoAumento;

console.log("Hola, estimad@ "+nombre+" "+apellido+". En base a su sueldo actual: $"+sueldoActual+" Ha recibido un aumento de 15%: $"+ ((sueldoActual*porcentajeAumento)/100)+" y su nuevo sueldo es de: $"+ nuevoSueldo);