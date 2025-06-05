1- Instalação do Node.js(LTS) e com o package do NPM
2 - Instalação do Postman ou Insomnia
3 - Criar o projeto com a pasta src dentro da pasta raiz.
4 - npm init -y
5 - Download Express  - npm install express --save
    package-lock
    node-modules (dependências)
    Permite que suba um servidor web para fazer os testes.

6 - Hello World example - https://expressjs.com/en/starter/hello-world.html
    app.js dentro de src

7 - rodar localmente 
    "node app.js"

8 - Para o servidor identificar todas as alterações sem o control+C:
    nodemom - pastaraiz/ 
    npm install nodemon -D (para indicar que será instalado apenas em dependência de desenvolvimento)

9 - executar o servidor
    alterar o package.json
        "scripts": {
            "dev": "nodemon src/app.js" - dev será o nome do script chamado para rodar o servidor
    
    Depois, basta rodar na pasta raiz mesmo "npm run dev" --- ou o nome do script salvo

10 - É indicado que se separe o server e o listen em apenas um arquivo (server.js)
    Lembrando que para isso será necessário mudar o padrão de const para padrão ES - import express.. com export ao final ...
    import express from "express" 
    export default app - para que fique acessível ao server
    No server.js - import app from "./src/app.js"

11 - Definição no package.json que o projeto trabalha com type:module
    "type": "module" -  obrigatório para import e export
        >> nesse ponto, importante lembrar que pela mudança do local do servidor, o node run dev não funcionará mais (considerando que o caminho definido em "dev" foi para o app.js)
        Por isso, é necessário substituir também no package.json a referência da onde se encontra o server. 

12 - Verificar o caminho do nodemon no package.json "dev". 
    "dev": "nodemon server.js",
        e agora sim, rodar com o "npm run dev"

13 - É boa prática definir constantes com letras MAIÚSCULAS  


14 - Requisições GET
    Endpoint - a rota definida
    app.get('/books', (req,res) =>{
    res.status(200).send(books)
    // send() comporta textos simples e mais elaborados
})
            é importante colocar o código de status, embora não seja obrigatório


15 - Requisições POST
    Para fazer uma requisição POST, será necessário fazer uma requisição para pegar as informações que será necessário acrescentar. Ou seja, pegar o corpo dessa requisição e por isso "req.body"
    app.post('/books',(req,res) =>{
    books.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')

    É aqui que entra o postman ou insomnia

13 - Ao utilizar o insomnia para criar as requisições e testar, 
será necessário realizar um ajuste no express no código para que uma requisição POST não seja alimentada como "NULL"
    app.use(express.json()) - indicar que o express faça a leitura do body com json
    
    LEMBRANDO QUE: com isso, ainda que o dado seja incluído, estamos tratando apenas de um mock, ou seja, os dados não estão salvos em uma base de dados e, por isso, se fizer uma nova requisição GET o dado que acabou de ser incluído provavelmente vai sumir e voltar ao zero. 


