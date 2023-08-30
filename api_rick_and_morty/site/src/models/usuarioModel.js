var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, cpf, senha) VALUES ('${nome}', '${email}', '${cpf}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Aqui estou gravando o quiz no banco de dados, inserindo os acertos os erros e o usuário que fez esse quiz.

function gravar_quiz(acerto, erro, usuario){

    console.log("Gravando quiz no banco de dados")
    var instrucao = `insert into quiz values (null, ${acerto}, ${erro}, ${usuario});`

    return database.executar(instrucao);
    
}

// Aqui estou buscando os últimos 7 acertos do usuario no banco de dados.

function buscar_quiz(idUsuario) {
    console.log("Buscando quiz no banco")
    var instrucao = `SELECT acertos
    FROM quiz
    WHERE fkUsuario = ${idUsuario}
    ORDER BY idPergunta DESC
    LIMIT 7;`

    return database.executar(instrucao);
}

// aqui estou buscando os ultimos 7 usuarios que tem mais acertos.

function buscar_ranking() {
    var instrucao = `
    SELECT MAX(quiz.Acertos) AS Acertos, usuario.nome
    FROM quiz
    JOIN usuario ON quiz.fkUsuario = usuario.idUsuario
    GROUP BY usuario.nome
    ORDER BY Acertos ASC
    LIMIT 7;`

    return database.executar(instrucao);
}

// aqui estou parametrizado as funções entrar, cadastrar, listar, gravar_quiz, buscar_quiz e buscar_ranking.

module.exports = {
    entrar,
    cadastrar,
    listar,
    gravar_quiz,
    buscar_quiz,
    buscar_ranking 
};