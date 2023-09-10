const peliculas = require('./peliculas.js');
console.log(peliculas);
let fs = require('fs');

let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8');
console.log(mensaje);