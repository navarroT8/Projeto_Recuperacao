
var database = require("../database/config");
var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            p.idPergunta,
            p.mensagem,
            p.urlImagem,
            al.idAlternativa,
            al.mensagem as mensagemAlternativa,
            al.ehCorreta
        FROM pergunta p
            INNER JOIN alternativa al
                ON al.fkPergunta = p.idPergunta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
}
