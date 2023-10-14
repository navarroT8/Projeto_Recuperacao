create database projeto_individual;
use projeto_individual;
select * from 
aviso;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
cpf char(14),
senha VARCHAR(50),
ehAdmin TINYINT(1) DEFAULT 0
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

CREATE TABLE pergunta (
	idPergunta int primary key auto_increment,
    mensagem varchar(100)
);

CREATE TABLE alternativa (
	idAlternativa int primary key auto_increment,
    mensagem varchar(100),
    fkPergunta int,
    ehCorreta TINYINT(1),
	constraint fkPergunta foreign key (fkPergunta)
	references pergunta (idPergunta)
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

ALTER TABLE usuario
ADD COLUMN ehAdmin TINYINT(1) NOT NULL DEFAULT 0;

INSERT INTO pergunta (mensagem) VALUES
('Quantos episódios tem a segunda temporada de Rick and Morty?'),
('Qual o episódio em que o Rick se transforma em um picles?'),
('Qual o nome da espécie das cabeças gigantes no episódio Planeta Música?'),
('Esses são os criadores de Rick and Morty, qual o nome deles?'),
('Qual o nome desse personagem em inglês?'),
('Qual o nome da dança que o Tiny Rick inventa durante o baile? (em inglês)'),
('Esta imagem foi retirada de qual episódio?'),
('Qual era o nome "de escravo" do Snowball?'),
('O que aconteceu com o Evil Morty na 3ª temporada?'),
('Qual o método que o Morty desenvolveu para descobrir quem é ou não um parasita?');

INSERT INTO alternativa (mensagem, fkPergunta, ehCorreta) VALUES
('Temp 3 Ep 7', 1, 0), ('Temp 3 Ep 2', 1, 0), ('Temp 3 Ep 3', 1, 1), ('Temp 3 Ep 4', 1, 0),
('Cromulons', 2, 0), ('Cabeças Gigantes', 2, 1), ('Giants', 2, 0), ('Cronenbergs', 2, 0),
('Justin Timberlake e Dan Timber', 3, 0), ('Justin Roiland e Dan Harmour', 3, 1), ('Jonas Cronenberg e Danny Willians', 3, 0), ('Jonas Harmour e Dan Roiland', 3, 0),
('Mr WeirdButt', 4, 0), ('Mr PoppyHatHole', 4, 0), ('Mr PoppyButtHole', 4, 1), ('Mr HatButtHole', 4, 0),
("I'm Old", 5, 0), ('Tiny Rick Song', 5, 1), ('Help me I\'m gonna die', 5, 0), ('Let me Out', 5, 0),
('Temp 1 Ep 5', 6, 0), ('Temp 2 Ep 6', 6, 0), ('Temp 2 Ep 5', 6, 0), ('Temp 2 Ep 7', 6, 1),
('Snuffles', 7, 1), ('Puffles', 7, 0), ('Troubles', 7, 0), ('Ruffles', 7, 0),
('Foi teletransportado para uma dimensão e vive como uma criança normal', 8, 0), ('Ele morreu', 8, 0), ('Virou presidente da cidadela', 8, 1), ('Está preso', 8, 0),
('Parasitas não criam memórias ruins', 9, 1), ('Parasitas não são humanos normais', 9, 0), ('Parasitas são extremamente esquisitos', 9, 0), ('Parasitas não conseguem admitir que estão errados', 9, 0);