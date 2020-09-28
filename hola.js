// Ejemplo 1
// Ejemplo 2
// Ejemplo 3
var http= require('http');
var manejador= function(solicitud, respuesta){
	console.log('conexion entrante');
	
	respuesta.end('hola mundo');
};
var servidor= http.createServer(manejador);
servidor.listen(8080);

