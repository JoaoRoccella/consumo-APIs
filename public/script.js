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
    
            const ul = document.createElement('ul');
    
            resposta.forEach(produto => {
                
                const liId = document.createElement('li');
                liId.innerHTML = produto.id;
                
                const liDescricao = document.createElement('li');
                liDescricao.innerHTML = produto.descricao;
    
                const liPreco = document.createElement('li');
                liPreco.innerHTML = produto.preco;
    
                ul.append(liId, liDescricao, liPreco);
            });
    
            document.body.appendChild(ul);
            
        });

}

const inputs = [
    { "type": "text", "id": "IdProduto", "label": "ID" },
    { "type": "text", "id": "descricao", "label": "Descrição" },
    { "type": "text", "id": "preco", "label": "Preço" },
];

function criaDivForm(inputs) {

    const divForm = document.createElement('div');
    divForm.classList.add('form');
    
    inputs.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('controle-form');
    
        const i = document.createElement('input');
        i.type = produto.type;
        i.id = produto.id;
    
        const l = document.createElement('label');
        l.htmlFor = produto.id;
        l.innerHTML = produto.label;
    
        div.append(l, i);
        divForm.append(div);
    });

    return divForm;

}

const divForm = criaDivForm(inputs);

const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = 'Adicionar';
divForm.append(btAdd);

document.body.append(divForm);

consultaProdutos();

const produto = {
    "descricao": document.querySelector('#descricao').value,
    "preco": document.querySelector('#preco').value
}

function cadastraProduto(produto) {

    const reqPost = new Request('http://localhost:3000/produtos', {
        "method": "POST",
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(produto)
    })
    
    fetch(reqPost)
}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produtoPost));

