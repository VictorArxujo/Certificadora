const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const user = require('../modelos/usuario');
const authControle = require('../controles/autenContr')

router.post(
    '/registro',
    [
        body('tipo').trim().not().isEmpty(),
        body('nome').trim().not().isEmpty(),
        body('senha').trim().not().isEmpty(),
        body('cpf').trim().not().isEmpty(),
        body('email').trim().not().isEmpty(),
    ], 
    authControle.registro  
);

router.post('/login', authControle.login);

module.exports = router