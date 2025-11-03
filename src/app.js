const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('Rota Não Encontrada');
});


module.exports = app;