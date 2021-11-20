// ------------- FUNCIONES ------------- // 
//declarativas
function miFuncion() {
    return 3;
}

//expresión
var miFuncion = function(){
    return a + b;
}
var miFuncion1 = function(a,b){
    return a + b;
}

miFuncion1();

//ejemplo1
function saludarEstudiantes(estudiante) {
    console.log(estudiante);    
}
saludarEstudiantes("Diego");
//--D Diego
function saludarEstudiantes(estudiante) {
    console.log(`Hola baby ${estudiante}`);    
}
//--D Hola baby Diego

//ejemplo2
function sumar(a,b) {
    var resultado = a + b; return resultado;
}
sumar(2,9)
//--D 11

function sumar(a,b) {
    return a + b;
}
sumar(3,12)
//--D 15