const db = require('../conexao/db');
module.exports = class Doacao {
    constructor(id, cpfUsuario, cidade, endereco, telefone, tipo, quantidade) {
        this.id = id;
        this.cpfUsuario = cpfUsuario;
        this.cidade = cidade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }

    static consultar(cpfUsuario) {
        return db.execute(
            'SELECT * FROM Doacoes WHERE cpfUsuario = ?', [cpfUsuario]
        );
    }

    static save(doacao) {
        return db.execute(
            'INSERT INTO Doacoes (cpfUsuario, cidade, endereco, telefone, tipo, quantidade) VALUES(?,?,?,?,?,?)', [doacao.cpfUsuario, doacao.cidade, doacao.endereco, doacao.telefone, doacao.tipo, doacao.quantidade]
        )
    }
};