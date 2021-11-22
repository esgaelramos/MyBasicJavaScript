// -------------  PIEDRAS PAPEL Y TIJERAS WITH SWITCH ------------- // NO TERMINADO 
var computadora = function() {
    var computadora = Math.random() * (3.5 - .5) + .5;
    if  (computadora <= 1.5){
        computadora = "piedra";
    } else if (computadora <= 2.5){
        computadora = "tijeras";
    } else {
        computadora = "papel";
    }
    return computadora;
}


var eleccion = prompt("¿Listo para jugar?, elige: ¿piedra, papel o tijeras?");

alert("Tu elegiste " + eleccion + ", y yo puse " + computadora() + " por ello:");

switch(true){
    case eleccion == computadora():
        console.log("EMPATAMOS. ¡Vuelve a intentarlo!");
        break;
    default:
        console.log("No soy nada, bueno sí un: ");     
}