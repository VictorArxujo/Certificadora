const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const user = require('../modelos/usuario');

router.post(
    '/registro',
    [
        body('nome').trim().not().isEmpty(),
        body('senha').trim().not().isEmpty(),
        body('cpf').trim().not().isEmpty(),
    ], 
    authControle.registro  
);

module.exports = router