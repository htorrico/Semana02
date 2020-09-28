var http= require('http');
var manejador= function(solicitud, respuesta){
    var i=0;
    console.log('conexion entrante bucle');
    while (i<20) {
        respuesta.write('<p>hi there!</p>');        
        i++;
    }
    console.log('conexion saliente bucle');
    respuesta.end();
    
};
var servidor= http.createServer(manejador);
servidor.listen(8080);