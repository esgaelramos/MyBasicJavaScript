// ------------- HOISTING ------------- // 
console.log(miVerde);
var miVerde;
miVerde = "Verde Agua";
// --D undefined

hey();

function hey() {
    console.log("Hola " + miVerde)
}
// --D undefined