const express = require('express');

const routes = express.Router();

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = Acessar corpo da requisição

routes.get('/', (req, res) => {
    return res.json({
        message: "Hello André"
    });
});

module.exports = routes;    
