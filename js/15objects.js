// -------------  OBJECTS ------------- //

var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    anno: "2020"
};

//para acceder a los objetos
miAuto.marca
//--D toyota

//un elemento del objeto puede ser una funcion que puede interactuar con las propiedades del objeto 

var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    anno: "2020",
    detalleDelAuto: function(){
	console.log(`Auto ${this.modelo} ${this.anno}`); 
    } 
}; 

miAuto.detalleDelAuto()
//--D Auto corolla 2020
