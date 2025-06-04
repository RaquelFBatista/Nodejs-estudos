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


        
    
