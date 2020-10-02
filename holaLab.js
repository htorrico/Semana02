
var http= require('http');

var manejador= function(solicitud, respuesta){
	console.log('hola mundo');	
	// html
    respuesta.end('<b>hola mundo Tecsup</b>');
    //Si puedes hacer referencia a un archivo en específico.

};

var servidor= http.createServer(manejador);
servidor.listen(8080);
