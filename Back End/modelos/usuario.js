const db = require('../conexao/db');
module.exports = class Usuario {
    constructor(tipo, nome, cpf, senha, email) {
        this.tipo = tipo;
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.email = email;
    }

    static find(cpf) {
        return db.execute('SELECT * FROM Usuarios WHERE cpf = ?', [cpf]);
    }

    static save(usuario) {
        return db.execute(
            'INSERT INTO Usuarios (tipo, nome, cpf, senha, email) VALUES(?,?,?,?,?)', [usuario.tipo, usuario.nome, usuario.cpf, usuario.senha, usuario.email]
        )
    }
};