function consultaProdutos() {

    const reqGet = new Request('http://localhost:3000/produtos', {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    });

    fetch(reqGet)
        .then(resposta => resposta.json())
        .then(resposta => {

            const section = document.createElement('section');
            section.id = 'produtos';
            
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

                ul.append(liId, liDescricao, liPreco);
                section.append(ul);
            });

            document.body.appendChild(section);

        });

}

consultaProdutos();