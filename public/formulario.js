const inputs = [
    { "type": "text", "id": "idProduto", "label": "ID", "readOnly": true},
    { "type": "text", "id": "descricao", "label": "Descrição", "autoFocus": true },
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
        i.readOnly = produto.readOnly ?? false;
        // produto.readOnly ? i.readOnly = true : i.readOnly = false;
        i.autofocus = produto.autoFocus ?? false;

        const l = document.createElement('label');
        l.htmlFor = produto.id;
        l.innerHTML = produto.label;

        // 
        div.append(l, i);
        divForm.append(div);
    });

    const btAdd = document.createElement('button');
    btAdd.type = 'button';
    btAdd.id = 'btAdd';
    btAdd.innerHTML = 'Adicionar';
    btAdd.setAttribute('data-acao', 'adicionar');
    divForm.append(btAdd);

    return divForm;

}

const divForm = criaDivForm(inputs);
document.body.append(divForm);