const db = require('../conexao/db');
module.exports = class Usuario {
    constructor(tipo, nome, cpf, senha, id) {
        this.tipo = tipo;
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.id = id;
    }
    static save(usuario) {
        return db.execute(
            'INSERT INTO Usuarios (tipo, nome, cpf, senha, id) VALUES(?,?,?,?,?)', [usuario.tipo, usuario.nome, usuario.cpf, usuario.senha, usuario.id]
        )
    }
};