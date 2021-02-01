const express = require('express');
const app = express();

//middlewares -- antes que lleguen a las rutas

app.use(express.json()); // lee objetos json
app.use(express.urlencoded({extended: false})); // formularios


//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Puerto montt');
