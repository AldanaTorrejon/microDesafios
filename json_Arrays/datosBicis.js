let fs = require('fs');
let bicicletasJson = fs.readFileSync(__dirname+'/bicis.json', 'utf-8');

let bicicletas = JSON.parse(bicicletasJson);

module.exports = bicicletas;