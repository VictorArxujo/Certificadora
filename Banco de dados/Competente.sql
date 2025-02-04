CREATE DATABASE competentes;
CREATE TABLE Usuarios (
	tipo varchar(40),
    nome varchar(40),
    cpf int,
    senha varchar(30),
    email varchar(40),
    PRIMARY KEY (cpf)
);

CREATE TABLE Doacoes (
	id int auto_increment,
    cpfUsuario int,
    cidade varchar(50),
    endereco varchar(50),
    telefone varchar(20),
    tipo varchar(30),
    quantidade int,
    PRIMARY KEY(id),
    FOREIGN KEY(cpfUsuario) REFERENCES Usuarios(cpf)
);
