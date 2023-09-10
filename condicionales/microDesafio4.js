let num1=3; let num2=2;
let operador="*"
switch(operador){
    case "+" || "suma" :
        console.log("La suma  del numero1: "+num1+" y del numero2: "+num2+" es "+ (num1+num2))
    break;
    case "-" || "resta":
        console.log("La resta  del numero1: "+num1+" y del numero2: "+num2+" es "+ (num1-num2))
    break;
    case "*" || "multiplicacion":
        console.log("La multiplicacion  del numero1: "+num1+" y del numero2: "+num2+" es "+ (num1*num2))
    break;
    case "/" || "division":
        console.log("La division  del numero1: "+num1+" y del numero2: "+num2+" es "+ (num1/num2))
    break;
    default:
        console.log("Las operaciones aceptadas son: sumar- restar- multiplicar- dividir")
}