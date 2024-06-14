function atualizaProduto(produto) {

    const reqPut = new Request(`http://localhost:3000/produtos/${produto.id}`, {
        "method": "PUT",
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(produto)
    });

    fetch(reqPut)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            }
        }).then(resposta => {
            alert('Produto atualizado com sucesso!');
            console.log(resposta);
            limpaProdutos();
            consultaProdutos();
        });

}