let pagoMes = 4000; let consumoKWH = 450;
let consumoHogar = consumoKWH>300? pagoMes*1.20 : pagoMes;
console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH+"khk en base al ajuste tarifario cumplimos con informarle que se ha ajustado el total a pagar, que será de $" +consumoHogar)