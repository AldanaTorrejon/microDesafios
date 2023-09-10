/*a.Crear cuatro variables y asignar a cada una las siguientes cadenas de texto.
  b.A cada una de las variables que contienen las cadenas de texto, habrá que convertirlas a arrays, separando cada elemento 
  por una coma*/
let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let array1=graduadosHTML5.split(" ")
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let array2=graduadosCSS3.split(" ")
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let array3=graduadosJAVASCRIPT.split(" ")
let graduadosNODEJS = "45 56 73 34 65 72 70 32";
let array4=graduadosNODEJS.split(" ")

// Función para calcular el promedio de graduados de un curso específico
function calcularPromedioGraduados(cursos) {
    let alumnos;
    switch (cursos) {
      case 1:
        alumnos = array1;
        break;
      case 2:
        alumnos = array2;
        break;
      case 3:
        alumnos = array3;
        break;
      case 4:
        alumnos = array4;
        break;
      default:
        return "El valor del curso debe estar entre 1 y 4 (1=HTML5, 2=CSS3, 3=JAVASCRIPT, 4=NODEJS)";
    }
    let promedio = 0;
    for (let i = 0; i < alumnos.length; i++) {
      promedio += parseFloat(alumnos[i]); 
    }
    return promedio / alumnos.length;
  }console.log("El promedio de graduados del curso es de : " + calcularPromedioGraduados(1));



