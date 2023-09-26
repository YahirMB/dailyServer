var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var aplicacion = express();




// aplicacion.use(bodyParser.json()); 
aplicacion.use(express.urlencoded({ extended: true }));
aplicacion.use(express.json());

//incluimos el archivo en el que se almacenan las rutas de cada entidad
const noteRoute = require("./server/routes/note.route");
const userRoute = require("./server/routes/user.route");


aplicacion.use("/api/user", userRoute);
aplicacion.use("/api/note", noteRoute);


aplicacion.listen(3300, function () {
    console.log("Servidor iniciado");
});