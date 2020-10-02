// Ejemplo 1
// Ejemplo 2
// Ejemplo 3
var http= require('http');
var manejador= function(solicitud, respuesta){
	console.log('conexion entrante');	
	// html
	respuesta.end('<b>hola mundo Tecsup</b>');
};

//createServer es una función del módulo http que nos permite crear un 
//servidor local
//Necesita un parámetro que se llama manejador
var servidor= http.createServer(manejador);
servidor.listen(8080);

