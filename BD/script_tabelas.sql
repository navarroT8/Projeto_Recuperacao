create database projeto_individual;
use projeto_individual;

 

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
cpf char(14),
senha VARCHAR(50)
);

CREATE TABLE aviso (
idAviso INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
descricao VARCHAR(150),
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

create table quiz (
idPergunta int primary key auto_increment,
Acertos int,
Erros int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario)
references usuario (idUsuario)
);

SELECT MAX(quiz.Acertos) AS Acertos, usuario.nome
FROM quiz
JOIN usuario ON quiz.fkUsuario = usuario.idUsuario
GROUP BY usuario.nome
ORDER BY Acertos ASC
LIMIT 7;


select quiz,
quiz.acertos,
quiz.erros,
quiz.fkUsuario
where fkUsuario = idUsuario;
desc quiz;
DELETE FROM quiz where idPergunta = 1;
select * from usuario;


SELECT acertos
FROM quiz
WHERE fkUsuario = 1
ORDER BY idPergunta ASC
LIMIT 7;
desc quiz;
DELETE FROM quiz WHERE fkUsuario = 2;

select * from quiz;
select * from usuario;
