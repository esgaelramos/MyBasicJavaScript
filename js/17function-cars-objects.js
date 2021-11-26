// -------------  OBJECTS FUNCIÓN CONSTRUCTORA CARROS ------------- // NO TERMINADO
alert("Oye! Dame los 30 carros ahora!")

for (var i = 0; i < 30; i++){
    function auto(marca, modelo, anno) { 
        this.marca = prompt("Ingresa la marca del auto " + i + ", por favor"); 
        this.modelo = prompt("Ingresa la modelo del auto " + i + ", por favor"); 
        this.anno = prompt("Ingresa el anno del auto " + i + ", por favor"); 
    }
    i++;
}    


var autoNuevo = new auto("Tesla", "Model3", "2021");

var autoNuevo2 = new auto("Ford", "Extreme", "2018");

var autoNuevo3 = new auto("Nissan", "Quick", "2017");