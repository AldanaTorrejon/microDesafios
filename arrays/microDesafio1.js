let electrodomesticos = ["heladera","lavarropa","cocina","licuadora","microondas","lavavajillas"]
/*Acceder de manera arbitraria a diferentes elementos del array.*/
console.log("Un elemento arbitrario del array es el producto5: "+electrodomesticos[2]);
console.log("Un elemento arbitrario del array es el producto5: "+electrodomesticos[4]);

/*Extraer el primer elemento del array y agregarlo al final del mismo.*/
 let primerElemento=electrodomesticos.shift();
 electrodomesticos.push(primerElemento);
 console.log("Array con el primer elemento al final: ");
 console.log(electrodomesticos);

/*Agregar al final del array dos (2) nuevos productos.*/
electrodomesticos.push("cafetera","aspiradora");
console.log("Array con elementos nuevos: ");
console.log(electrodomesticos);

/*Mostrar por la consola la cantidad de elementos que contiene el array.*/
console.log("Cantidad de elementos del nuevo array: "+electrodomesticos.length);

/*Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro 
del array. De existir, se le debe mostrar el mensaje:“Producto encontrado”. En el caso contrario mostrar el mensaje 
“El producto buscado no existe”.*/
let productoBuscado="microondas";
if(electrodomesticos.includes(productoBuscado)){
    console.log("Producto encontrado:"+productoBuscado)
}else{
    console.log("El producto buscado no existe")
}

/*Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.*/
console.log("Elementos unidos: "+electrodomesticos.join(" "));

/*Determinar la cantidad de elementos que posee la cadena de texto obtenida.*/
console.log("Cantidad de elementos de la cadena de texto: "+electrodomesticos.length);

/*Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.*/
let reemplazo=electrodomesticos.join(" ");
console.log("Reemplazo de elementos de la cadena de texto: "+reemplazo.replace("lavarropa","refrigerador"));

/*Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. 
Tener en cuenta que los elementos deben estar separados por una coma.*/
console.log("Nuevo Array: ")
console.log(reemplazo.replace("lavarropa","refrigerador").split(" "));

