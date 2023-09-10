let bicis= require('./datosBicis.js');
let dhBici = {
    bicicletas: bicis,
    buscarBici: function(id){
        let biciBuscada = this.bicicletas.filter(function(bici){
            return bici.id == id
        });
        return biciBuscada.length > 0 ? biciBuscada[0] : null
    },
    venderBici: function(id){
        let biciVendida = this.buscarBici(id)
        if(biciVendida !== null){
            biciVendida.vendida = true;
            return biciVendida;
        } else {
            return 'Bicicleta no encontrada'
        }
    },
    bicisParaLaVenta: function(){
        let bicisNoVendidas = this.bicicletas.filter(function(bici){
            return bici.vendida === false;
        });
        return bicisNoVendidas;
    },
    totalDeVentas: function(){
        let ventas = this.bicicletas.reduce(function(acumulador, bici){
        if (bici.vendida === true){
            acumulador = acumulador + bici.precio;
            }
            return acumulador;
        },0);
        return ventas
    },
    aumentoBici: function(porcentaje){
        let bicisConAumento = this.bicicletas.map(function(bici){
            bici.precio = bici.precio + (bici.precio * porcentaje) /100;
            return bici
        });
        return bicisConAumento
    },
    biciPorRodado: function(rodado){
        let biciRodado = this.bicicletas.filter(function(bici){
            return bici.rodado === rodado
        });
        return biciRodado
    },
    listarTodasLasBicis: function (){
        this.bicicletas.forEach(function(elemento){
            console.log(elemento);
        });
    }
}
console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(2));
console.log(dhBici.venderBici(3));
console.log(dhBici.bicisParaLaVenta());
console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(10));
console.log(dhBici.biciPorRodado(26));
console.log(dhBici.listarTodasLasBicis());