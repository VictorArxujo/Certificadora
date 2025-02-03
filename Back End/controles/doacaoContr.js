const { validationResult } = require('express-validator');
const Doacoes = require('../modelos/doacoes') 

exports.doar = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return
    const cpfUsuario = req.body.cpfUsuario;
    const cidade = req.body.cidade;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;
    const tipo = req.body.tipo;
    const quantidade = req.body.quantidade;

    try {
        const doacao = {
            cpfUsuario:cpfUsuario,
            cidade:cidade,
            endereco:endereco,
            telefone:telefone,
            tipo: tipo,
            quantidade: quantidade
        }
        const resultado = await Doacoes.save(doacao);
        res.status(201).json({message: 'Doacao registrada'});
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}