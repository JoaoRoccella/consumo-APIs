# consumo-APIs
Repositório para as demonstrações e aprendizado sobre o consumo de APIs.

As APIs possuem alguns elementos que servem à sua utilização:

- **Ponto de entrada**: é o endereço do serviço hospedado e que pode ser acessado através de um navegador ou uma ferramenta de consumo de APIs. Exemplo: <https://dadosabertos.camara.leg.br/api/v2>.
- **Recursos**: são serviços de dados disponíveis para consumo. Exemplo: **/deputados** -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.
- **Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela API. Os parâmetros podem ser passados para a API através da URL ou no corpo (body) da requisição. Exemplo: ?nome=bebeto -> <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=bebeto>.
- **Métodos**: são os modos de consumo de uma API, que podem ser:
    - POST: inserção (CREATE)
    - GET: consulta/leitura (READ)
    - PUT e PATCH: atualização (UPDATE)
    - DELETE: deleção (DELETE)

Para este projeto vamos usar o Node.js e o NPM (Node Package Manager):
- Node.js v20.13.0 LTS -> Long Term Suport (versão estável)

NPX -> Node Package eXecuter (Executor de pacote do Node)

TO-DO (documentar):
- Instalação e uso do Json Server: <https://github.com/typicode/json-server>
- Criação do .gitignore
- Utilidade dos arquivos package
- Criação do script "start" no package.json
- Observações em relação ao uso do JSON5 vs. JSON: <https://github.com/json5/json5>
- Instalação das extensões para formatação de arquivo .json5
- Chamada do script start com NPM ao invés do NPX
- O que é o Chocolatey (e porque não instalá-lo agora)

Da aula de sexta (10/05):
- Instalação de dependencias de projeto com o comando npm install

## Requisição

Para criar uma nova requisição, podemos utilizar a função fetch API.

~~~js
const requisicao = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-type": "application/json"
    }
});
~~~

Utilizamos `new Request()` para _instanciar_ a interface `Request()` na variável `requisicao`, de forma que ela se torna um objeto com os métodos exigidos por essa interface.

A requisição é constituída por duas partes: uma URL e um objeto JSON contendo as opções da requisição. 
- **URL**: é o endereço do recurso que você deseja acessar.
- **Objeto JSON**: é um objeto que pode conter informações como o método HTTP (GET, POST, PUT, DELETE, etc.), headers, body, etc.

`method` define o método da requisição (nesse caso, GET) e `headers` define os cabeçalhos da requisição. `Content-type` define o tipo de conteúdo que está sendo enviado, nesse caso `application/json`.

~~~js
fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => { ... });
~~~

Agora, para enviar essa requisição, utilizamos a função `fetch()` que é uma função _assíncrona_ que retorna uma Promise. Essa Promise é _resolvida_ (ou cumprida -- fullfilled) com o objeto `Response` que representa a resposta do servidor.

A função `then()` é utilizada para lidar com a resposta do servidor. Nesse caso, estamos utilizando `then()` duas vezes: uma vez para converter a resposta em JSON, com o método `json()` do objeto `resposta`, e outra vez para lidar com a resposta em si, já que o retorno do primeiro `then()` é parâmetro de entrada do segundo `then()`.

O parâmetro de entrada de uma função `then()` é chamado de _função de callback_.