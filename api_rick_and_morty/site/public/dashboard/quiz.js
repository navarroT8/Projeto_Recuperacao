

// Aqui estou fazendo uma função para o 


function iniciar_quiz() {
    comeco_quiz.style.display = 'none';
    questoes.style.display = 'flex';

    aparecer.innerHTML = `${lista_perguntas[i]}`;
    img.innerHTML = `${lista_imagem[i]}`;
}

function cadastrar() {
    window.location = "cadastro.html";
}
