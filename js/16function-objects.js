// -------------  OBJECTS FUNCIÓN CONSTRUCTORA ------------- //
var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    anno: "2020",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anno}`); 
    } 
    
};
function auto(marca, modelo, anno) { 
    this.marca = marca; 
    this.modelo = modelo; 
    this.anno = anno; 
}

var autoNuevo = new auto("Tesla", "Model3", "2021");

var autoNuevo2 = new auto("Ford", "Extreme", "2018");

var autoNuevo3 = new auto("Nissan", "Quick", "2017");