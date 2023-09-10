let operaciones=[100,-200,300,-100,400];
function calcular (calculo){
    let deposito=0; let saldoActual=0; let retiro=0;
    for( let i=0;i<calculo.length;i++){
        if (calculo[i]>0){
            deposito= deposito+calculo[i];
        }else {
            retiro=retiro+calculo[i];
        }
    }saldoActual=deposito+retiro;
    return[deposito,saldoActual,retiro]
}console.log(calcular(operaciones))
function datos(nombre,apellido,calculo,callback){
    let saldoA=callback(calculo);
    let mensaje = "Estimada "+nombre+" "+apellido+":"+
    "\nEl monto Total de los depositos es de: "+ saldoA[0]+
    "\nEl monto Total de los retiros es de: "+ saldoA[2]+
    "\nEl saldo Actual: "+saldoA[1];
    return mensaje
}console.log(datos("Gloria","Medina",operaciones,calcular))