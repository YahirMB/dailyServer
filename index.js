var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();


router.get('/', function(request, response) {  
   response.status(200).json({"mensaje":"Nuestra primera app con node.js utilizando express"});
});

aplicacion.use(bodyParser.json()); 

//incluimos el archivo en el que se almacenan las rutas de cada entidad
const UserRoute = require("./server/routes/role");

aplicacion.use("/api/role", UserRoute);



aplicacion.listen(3300, function() { 
console.log("Servidor iniciado");
});