function buscar_avisos() {
    var url = `http://localhost:3333/avisos/listar`;
    // Perform the request
    fetch(url)
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(json => {
                        exibir_avisos(json)
                    })
            } else {
                throw new Error('Erro ao buscar os avisos.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function exibir_avisos(data) {
    avisosDiv.innerHTML = "";
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]["email"])
        avisosDiv.innerHTML += `
                <article>
                  <div class="article-wrapper">
                    <div class="article-body">
                      Autor: ${data[i]["nome"]}
                      <h2>${data[i]["titulo"]}</h2>
                      <p>
                        ${data[i]["descricao"]}
                      </p>
                    </div>
                  </div>
                </article>
        `;
    }


}