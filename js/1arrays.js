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
