const express = require('express');
const roouter = express.Router();
const Productos = require('../controller/index');

// http://localhost:3000/api/producto
roouter.get('/productos', Productos.getAll);
roouter.get('/productos/:id', Productos.getByID);
// roouter.post('/productos');

module.exports = roouter;