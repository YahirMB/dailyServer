var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();


router.get('/', function(request, response) {  
   response.status(200).json({"mensaje":"Nuestra primera app con node.js utilizando express"});
});

aplicacion.use(bodyParser.json()); 

//incluimos el archivo en el que se almacenan las rutas de cada entidad
const roleRoute = require("./server/routes/role");
const userRoute = require("./server/routes/user.route");




aplicacion.use("/api/role", roleRoute);
aplicacion.use("/api/user", userRoute);



aplicacion.listen(3300, function() { 
console.log("Servidor iniciado");
});