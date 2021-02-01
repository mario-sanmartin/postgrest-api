const { Router } = require('express');
const routes =  Router();
const { mascotas,crearMascota, unaMascota,borrarMascota,actualizarMascota } = require('../controllers/controlador')


routes.get('/mascotas', mascotas);
routes.get('/mascotas/:id', unaMascota);
routes.delete('/mascotas/:id', borrarMascota);
routes.put('/mascotas/:id', actualizarMascota);
routes.post('/mascotas', crearMascota);

module.exports = routes;
