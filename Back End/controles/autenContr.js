const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
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
};

exports.login = async (req, res, next) => {
    const cpf = req.body.cpf;
    const senha = req.body.senha;
    const tipo = req.body.tipo;

    try {
      const user = await Usuario.find(cpf);

        if(user[0].length !== 1) {
            const error = new Error('usuario não encontrado');
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];
        const igualSenha = senha === storedUser.senha ? true : false;
        if(!igualSenha) {
            const error = new Error('senha incorreta');
            error.statusCode = 401;
            throw error;
        }
        const igualTipo = tipo === storedUser.tipo ? true : false;
        if(!igualTipo) {
            const error = new Error('tipo de usuario incorreto');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            cpf: storedUser.cpf,
            senha: storedUser.senha,

            },
            'secretfortoken',
            {expiresIn: '1h'}
        );
        res.status(200).json({token: token, userCpf: storedUser.cpf })

    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}
