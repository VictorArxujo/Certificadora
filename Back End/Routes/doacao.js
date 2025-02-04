const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const doacao = require('../modelos/doacoes');
const doacaoControle = require('../controles/doacaoContr')

router.post(
    '/doar',
    [
        body('cpfUsuario').trim().not().isEmpty(),
        body('cidade').trim().not().isEmpty(),
        body('endereco').trim().not().isEmpty(),
        body('telefone').trim().not().isEmpty(),
        body('tipo').trim().not().isEmpty(),
        body('quantidade').trim().not().isEmpty(),
    ], 
    doacaoControle.doar  
);

router.post('/puxar', doacaoControle.puxar)

module.exports = router