// -------------  MÉTODOS DE RECORRIDOS DE ARRAYS ------------- //

var articulos = [ 
    { nombre: "Bici", costo: 3000 }, 
    { nombre: "Tele", costo: 2500 }, 
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Audifonos", costo: 1700 }  
];  

var articulosFiltrados = articulos.filter(function(articulo){ return articulo.costo <= 500 });
//--D  { nombre: "Libro", costo: 320 }
//crea un nuevo array solo con los elementos que tengan la caracteristica mencionada
var articulosMapeados = articulos.map(function(articulo){ return articulo.nombre });
//--D (6) ['Bici', 'Tele', 'Libro', 'Celular', 'Laptop', 'Audifonos']
//crea un nuevo array solo con los resultados de los parametros pedidos

// -------------  MÉTODOS DE RECORRIDOS DE ARRAYS 2 ------------- //

var articulos = [ 
    { nombre: "Bici", costo: 3000 }, 
    { nombre: "Tele", costo: 2500 }, 
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Audifonos", costo: 1700 }  
];  

var articulosFiltrados = articulos.filter(function(articulo){ return articulo.costo <= 500 });
//--D  { nombre: "Libro", costo: 320 }
//crea un nuevo array solo con los elementos que tengan la caracteristica mencionada
var articulosMapeados = articulos.map(function(articulo){ return articulo.nombre });
//--D (6) ['Bici', 'Tele', 'Libro', 'Celular', 'Laptop', 'Audifonos']
//crea un nuevo array solo con los resultados de los parametros pedidos

var encuentraArticulo = articulos.find(function(articulo){ return articulo.nombre === "Laptop" });
//--D {nombre: 'Laptop', costo: 20000}
//crea un nuevo array con los elementos que pasen el filtro

articulos.forEach(function(articulo){ console.log(articulo.nombre) });
//no genera un nuevo array, solo te entrega lo que pidas respecto a otro
//--D Bici
//--D Tele
//--D Libro
//--D Celular
//--D Laptop
//--D Audifonos

var articulosBaratos = articulos.some(function(articulo){ return articulo.costo <= 2000; });
articulosBaratos
//--D true
//regresa validacion de verdadero o falso, y genera un nuevo array
