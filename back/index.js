const express = require('express');
const server = express();
const dotenv = require('dotenv');
dotenv.config();
const routerProductos = require('./src/routes/index');

const PORT = process.env.PORT || 3000;

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    next();
})

server.get('/', (req, res) => {
    res.send('API TIENDA');
})

server.use('/api', routerProductos);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})