function montoPagar(tipo,dia,silla){
    let monto = 0
    switch(tipo){
        case  "Compacto":
            monto = 14000 * dia
        break;
        case  "Mediano":
            monto= 17000 * dia
        break;
        case "Camioneta":
            monto= 28000*dia
        break;
    }
    if(sillaParaBebe = true){
       monto= monto + 1200 *dia
    }
    return "Estimado cliente: en base al tipo de vehículo " + tipo + " alquilado, considerando los " + dia + " días utilizados, el monto total a pagar es de $" + monto;
}console.log(montoPagar("Compacto", 5, true));