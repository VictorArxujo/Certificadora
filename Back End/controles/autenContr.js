const { validationResult } = require('express-validator');
const Usuario = require('../modelos/usuario') 

exports.registro = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return
    const tipo = req.body.tipo
    const nome = req.body.nome;
    const senha = req.body.senha;
    const cpf = req.body.cpf;
    const email = req.body.email;

    try {
        const usuario = {
            tipo:tipo,
            nome:nome,
            senha:senha,
            cpf:cpf,
            email: email
        }
        const resultado = await Usuario.save(usuario);
        res.status(201).json({message: 'Usuario registrado'});
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}