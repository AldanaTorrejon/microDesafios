let importar = require("./collectibles")

const figura1 = importar('Hot Toys')
const figura2 = importar("Bandai")
const figura3 = importar("Star Wars")
const unifiedCollectibles = [...figura1, ...figura2, ...figura3]

const collectibles = {
    figuras:unifiedCollectibles,
    listFigures:function (){
        this.figuras.forEach(function(datos){
            console.log(datos);
        });
    },figuresByBrand: function (marca){
        let filtrar = this.figuras.filter(function(component){
            return marca === component.marca;
        });return filtrar;
    },
 }
console.log(collectibles.listFigures());
console.log("Figuras de la marca elegida:")
console.log(collectibles.figuresByBrand("Hot Toys"));