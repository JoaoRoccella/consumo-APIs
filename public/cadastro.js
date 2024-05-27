const produtoPost = {
    "descricao": document.querySelector('#descricao').value,
    "preco": document.querySelector('#preco').value
}

function cadastraProduto(produtoPost) {

    const reqPost = new Request('http://localhost:3000/produtos', {
        "method": "POST",
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(produtoPost)
    })
    
    fetch(reqPost)
}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produtoPost));


