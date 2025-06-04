const express = require("express") // importando o express
const app = express() //instancia
const port = 3000

// criando uma rota padrão

// A indicação da rota raiz '/'
// callback req,res com arrow function
app.get('/', (req,res) => {
    res.send('Hello World ')
})

// escutar a porta
// não é necessário passar o req e res. 
app.listen (port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

// atalho da crase control+shift+agudo hehe


