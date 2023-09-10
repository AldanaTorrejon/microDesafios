let precioCursos = [
    ["html5", 4000], ["css3", 5000], 
    ["javascrip", 10000], ["react", 7000], ["nodejs", 15000]
];
let cursosDisponible=["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"]
let cursosElegidos=["HTML5","NODEJS"]

function monto(precioCurso,cursos){
    let total=0;
    for(let i=0; i<precioCurso.length;i++){
        for(let k=0;k<cursos.length;k++){
            if(precioCurso[i][0].toUpperCase() === cursos[k]){
                total= total+precioCurso[i][1];
            }
        }
    }return total
}

function datos(nombre,apellido,precioC,cursosE,monto){
    let total=monto(precioCursos,cursosElegidos);
    console.log("Estimado "+nombre+" "+apellido+" ,en funcion con los cursos seleccionados: ")
    for(let i=0;i<cursosE.length;i++){
        console.log(i+1+"- "+cursosE[i])
    }
    console.log("El monto total a pagar por los cursos es: $"+total);
    console.log("Bienvenido a la gran aventura Digital House.")
}
datos("Aldana","Torrejon",precioCursos,cursosElegidos,monto)


//monto(precioCursos,cursosElegidos);