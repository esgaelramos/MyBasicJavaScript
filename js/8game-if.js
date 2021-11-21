// ------------- PIEDRAS PAPEL Y TIJERAS WITH IF------------- // 

function getRandomOption() {
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
function gameLogic(){
    if(eleccion === computadora) {
        alert("EMPATAMOS. Ambos elegimos: " + eleccion + " ¡vuelve a intentarlo!");
    } else if (eleccion === "tijeras"){
        if (computadora === "piedra"){
            alert("Perdiste, yo elegí " + computadora);
        } else {
            alert("Ganaste, yo elegí " + computadora);
        }
    }  else if (eleccion === "papel"){
        if (computadora === "piedra"){
            alert("Ganaste, yo elegí " + computadora);
        } else {
            alert("Perdiste, yo elegí " + computadora);
        }
    }  else if (eleccion === "piedra"){
        if (computadora === "papel"){
            alert("Perdiste, yo elegí " + computadora);
        } else {
            alert("Ganaste, yo elegí " + computadora);
        }        
    } else {
        alert("Revisa tu elección y vuelve a intentarlo")
    }   
}
function repetirGame(){
    if(repetir === "yes"){
        alert("¡Largo de aquí niño, este es un ejercicio de IF no de LOOPS!");
    } else if (repetir === "no"){
        alert("Ni yo quiero, ¡qué bueno!");
    } else {
        alert("Revisa tu respuesta");
    }    
    return repetir;
}

alert("Hola, ¿listo para jugar?");
var eleccion = prompt("Elige: piedra, papel o tijeras, ¡ahora!");
var computadora = getRandomOption();
alert("¡Listo! tú elegiste " + eleccion + " y yo elegí " + computadora + " por ello:");
gameLogic();
var repetir = prompt("¿Quieres jugar de nuevo? yes/no");
var repetir = repetirGame();