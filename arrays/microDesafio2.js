let peliculas=["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"];
function peliculaPreferida(favorita){
    let ultimaPelicula= favorita.pop();
    favorita.unshift(ultimaPelicula.toUpperCase());
    return favorita
}console.log(peliculaPreferida(peliculas));

let peliculasEstrenos = ["Counter-Strike", "NOP", "Vértigo","Nick","Avatar"];
console.log("Peliculas Estreno: ")
console.log(peliculasEstrenos)
console.log("Este elemento es un videojuego: "+peliculasEstrenos.shift())

console.log("Total Peliculas")
console.log(peliculas.concat(peliculasEstrenos))