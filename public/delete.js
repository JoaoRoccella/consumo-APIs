function removeProduto(id) {
 
    const reqDelete = new Request(`http://localhost:3000/produtos/${id}`, {
        "method": "DELETE",
        "headers": {
            "Content-type": "application/json"
        }
    });
 
    fetch(reqDelete)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            }
        }).then(resposta => {
            alert('Produto removido com sucesso!');
            console.log(resposta);
        });
}