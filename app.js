
function pesquisar() {
    let pesquisa = document.getElementById('resultados-pesquisa');
    let resultados = '';
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        pesquisa.innerHTML = '<h2>Busca vazia. Digite um nome de uma praia</h2>'
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let titulo = '';
    let descricao = '';
    let tag = '';

for (let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tag = dado.tag.toLowerCase();

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        resultados +=`
        <div class="item-resultado">
        <h2>
                <a href="#">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`
    }
}

if (!resultados){
    pesquisa.innerHTML = '<h2>Nenhuma praia foi encontrada.</h2>'
    return;
}

pesquisa.innerHTML = resultados;
}



