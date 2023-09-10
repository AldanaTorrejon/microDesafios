const numeros=[2,4,6,8,10,12,14,16,18,20];
const [posicion0,, posicion2,,posicion4,...restoNum] = numeros;
const restoDeNum = [numeros[1], numeros[3],...restoNum];
////////////////
const mascota = {
  nombre: 'Atenas',
  especie: 'Perro',
  color: 'Blanco',
  raza: 'Caniche Mini Toy'
};
const {nombre, especie, color, raza} =mascota;

//////////////

console.log("Numero0:"+posicion0+" ,Numero2:"+posicion2+" y Numero4:"+posicion4);
console.log("Resto de Numeros:"+restoDeNum);
console.log("Hola les presento a mi mascota su nombre es: "+ nombre + ", es un hermoso " + especie + " de color: " + color + " y su raza es: " + raza);
