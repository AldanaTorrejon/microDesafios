let fs = require('fs');

function importar (marca) {
  let figura="";
if (marca == "Hot Toys"){
  figura=JSON.parse(fs.readFileSync("./datos/figura1.json", "utf-8"))
}else if (marca == "Bandai"){
  figura=JSON.parse(fs.readFileSync("./datos/figura2.json", "utf-8"))
}else{
  figura=JSON.parse(fs.readFileSync("./datos/figura3.json", "utf-8"))
}
return figura;
}
module.exports = importar;
