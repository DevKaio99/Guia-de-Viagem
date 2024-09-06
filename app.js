
function pesquisar() {
    let pesquisa = document.getElementById('resultados-pesquisa');
    let resultados = '';

for (let dado of dados){
    resultados +=`
    <div class="item-resultado">
    <h2>
            <a href="#">${dado.titulo}</a></h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="#">${dado.link}</a>
</div>`
}

pesquisa.innerHTML = resultados;
}



