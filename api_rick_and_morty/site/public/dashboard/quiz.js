

// Aqui estou fazendo uma função para iniciar o quiz e ir trocando de imagem pergutas e repostas


function iniciar_quiz() {
    comeco_quiz.style.display = 'none';
    questoes.style.display = 'flex';

    aparecer.innerHTML = `${lista_perguntas[i]}`;
    img.innerHTML = `${lista_imagem[i]}`;
}
// aqui fiz uma função para caso ele clique no botão cadastrar na historia ele direciona para o cadastro.
function cadastrar() {
    window.location = "cadastro.html";
}
