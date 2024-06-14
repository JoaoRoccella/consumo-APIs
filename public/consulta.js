function limpaProdutos() {
    document.querySelector('#produtos').remove();
}

function consultaProdutos() {

    const reqGet = new Request('http://localhost:3000/produtos', {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    });

    // a função fetch() retorna uma Promise, que é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona
    fetch(reqGet)
        .then(resposta => resposta.json())
        // a função then() retorna uma Promise, que será resolvida com o valor retornado pela função de callback
        .then(resposta => {

            const section = document.createElement('section');
            section.id = 'produtos';
            section.innerHTML = '<h2>Produtos</h2>';
            
            resposta.forEach(produto => {
                const ul = document.createElement('ul');
                ul.setAttribute('data-id', produto.id);

                const liId = document.createElement('li');
                liId.innerHTML = produto.id;
                liId.setAttribute('data-produto', 'id');

                const liDescricao = document.createElement('li');
                liDescricao.innerHTML = produto.descricao;
                liDescricao.setAttribute('data-produto', 'descricao');

                const liPreco = document.createElement('li');
                liPreco.innerHTML = produto.preco;
                liPreco.setAttribute('data-produto', 'preco');

                const btDelete = document.createElement('button');
                btDelete.type = 'button';
                btDelete.innerHTML = '❌';
                btDelete.setAttribute('data-acao', 'remover');

                ul.append(liId, liDescricao, liPreco, btDelete);
                section.append(ul);
            });

            document.body.appendChild(section);

        });

}