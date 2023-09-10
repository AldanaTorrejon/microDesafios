//Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function ingresar (valor){
    for(let i=valor;i<=valor+10;i++){
        console.log(i)
    }
}ingresar(2);

console.log("---------")
//Imprimir los números entre el 1 y el 57, saltando de tres en tres.
function salto (){
    for(let i=1;i<=57;i+=3){
        console.log("Valores de 3 en 3: "+i)
    }
}salto();


console.log("---------")
//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
 function sumatoria(){
    let sumatoria=0
    for(let i=0;i<=100;i++){
        sumatoria=sumatoria+i;
        console.log("La sumatoria de "+i+" llegar al 100 es: "+sumatoria)
    }
}sumatoria();

console.log("---------")
/*Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’. Tendrá la 
responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.*/
 function texto(cadena){
    for(let letra of cadena){
        console.log(letra.toUpperCase())
    }
}texto("practicando el uso de los ciclos o bucles");

console.log("---------")
/*Crear una función que reciba como parámetro un array de números positivos. Tendrá la responsabilidad de retornar un nuevo 
array pero sólo con los valores pares.*/
function pares(numeros){
    let numerosPares=[];
    for(let i=0;i<numeros.length;i++){
        if (numeros[i]%2==0){
            numerosPares.push(numeros[i]);
        }
    }return numerosPares
}let numeros = [10, 20, 35, 40, 55, 60, 57, 80, 95, 100];
let numerosPares = pares(numeros);
console.log(numerosPares);