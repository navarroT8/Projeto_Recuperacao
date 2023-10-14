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
                      <div style="width: 100%; display: flex; justify-content: space-between;">
                        Autor: ${data[i]["nome"]} 
                        <img onclick="excluirAviso(this.id)" id="${data[i]["idAviso"]}" style=" cursor:pointer; height: 20px;" src="../img/icon-delete.jpg">
                      </div>
                      <br>
                        <h3>${data[i]["titulo"]}</h3>
                        <p>
                        ${data[i]["descricao"]}
                      </p>
                    </div>
                  </div>
                </article>
        `;
    }
}

function excluirAviso(idAviso) {
    const deletarAvisoBooelan = prompt('Digite "deletar" para confirmar esta operação')

    if (deletarAvisoBooelan != "deletar") {
        window.alert("Operação cancelada")
        return
    }


    var url = `http://localhost:3333/avisos/deletar/${idAviso}`;
    var options = {
        method: 'DELETE',
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                window.alert('Aviso deletado com sucesso');
                window.location = '../admin/aviso-admin.html'
            } else {
                throw new Error('Erro ao gravar o resultado do quiz.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });

}
