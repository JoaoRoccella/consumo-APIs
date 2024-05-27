
const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = 'Adicionar';

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

divForm.append(btAdd);

document.body.append(divForm);

