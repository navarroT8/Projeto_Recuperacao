
var perguntasModel = require("../models/perguntasModel");

function listar(req, res) {
    perguntasModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(formatData(resultado));
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function formatData(originalData) {
    const formattedData = [];
  
    for (let i = 0; i < originalData.length; i++) {
      const idPergunta = originalData[i].idPergunta;
      const mensagem = originalData[i].mensagem;
      const urlImagem = originalData[i].urlImagem;
  
      const existingQuestion = formattedData.find(item => item.idPergunta === idPergunta);
  
      if (!existingQuestion) {
        const newQuestion = {
          idPergunta,
          mensagem,
          urlImagem,
          alternativas: []
        };
  
        newQuestion.alternativas.push({
          idAlternativa: originalData[i].idAlternativa,
          mensagem: originalData[i].mensagemAlternativa,
          ehCorreta: originalData[i].ehCorreta
        });
  
        formattedData.push(newQuestion);
      } else {
        existingQuestion.alternativas.push({
          idAlternativa: originalData[i].idAlternativa,
          mensagem: originalData[i].mensagemAlternativa,
          ehCorreta: originalData[i].ehCorreta
        });
      }
    }
  
    return formattedData;
  }

module.exports = {
    listar
}