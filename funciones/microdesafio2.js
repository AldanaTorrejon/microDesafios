function tipoHamburguesa(tipo,jamon,queso,salsa,mayonesa,mostaza,tomate,lechuga,cebolla){
    let total=0;
    if (tipo =="Carne a la parrilla"){
        total=1800;
    }else 
        if(tipo=="Pollo"){
        total=1500;
        }else 
           if(tipo=="Vegetariana"){
        total=1200;
    }if (jamon==true){
        total=total+30;
    }if (queso==true){
        total=total+25;
    }if (salsa==true){
        total=total+5;
    }if (mayonesa==true){ 
        total=total+5;
    }if (mostaza==true){
        total=total+5;
    }if (tomate==true){
        total=total+15;
    }if (lechuga==true){
        total=total+10;
    }if (cebolla==true){
    total=total+10;
    }
    return total;
}

function mostrarTotal(nombre,apellido,tipo,jamon,queso,salsa,mayonesa,mostaza,tomate,lechuga,cebolla){
    return "Estimado cliente "+nombre+" "+apellido+", el monto total a pagar es $"
    +tipoHamburguesa(tipo,jamon,queso,salsa,mayonesa,mostaza,tomate,lechuga,cebolla);
}console.log(mostrarTotal("Aldana","Torrejon","Pollo",true,false,true,false,true,false,true,false));