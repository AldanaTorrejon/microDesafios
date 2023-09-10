let velocidadVuelo = 275; let alturaVuelo = 200; 

function estaListoParaAterrizar(velocidad, altura) {
    if (velocidad >= 268 && velocidad <= 278 && altura >= 150 && altura <= 300) {
      return true; 
    } else {
      return false;
    }
  }
  if (estaListoParaAterrizar(velocidadVuelo, alturaVuelo)) {
    console.log("El avión está listo para iniciar el aterrizaje.");
  } else {
    console.log("El avión NO está listo para iniciar el aterrizaje.");
  }
  