// -------------  LOOPS FOR Y FOR... OF ------------- //
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){ 
	console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]); 
} 
//--D Hola, Maria
//--D Hola, Sergio
//--D Hola, Rosa
//--D Hola, Daniel

//o usar FOR ... OF

for (var estudiante of estudiantes){ 
	saludarEstudiantes(estudiante); 
}
//--D Hola, Maria
//--D Hola, Sergio
//--D Hola, Rosa
//--D Hola, Danie