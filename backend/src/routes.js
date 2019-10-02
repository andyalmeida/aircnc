const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = Acessar corpo da requisição

//repository patern
//services paterns

routes.post('/sessions', SessionController.store);

module.exports = routes;
