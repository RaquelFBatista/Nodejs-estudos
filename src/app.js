import express from "express" // importando o express

const app = express() //instancia


//indicar que o express faça a leitura do body com json
app.use(express.json())


// mock - para teste
const books = [
    {id: 1, selecao: "Uma mulher no escuro ", genero: "Suspense" },
    {id: 2, selecao: "A empregada ", genero: "Suspense" },
    {id: 3, selecao: "Jardim das borboletas ", genero: "Suspense" },
    {id: 4, selecao: "Carta ao pai ", genero: "Drama" },
]


// criando uma rota padrão
// A indicação da rota raiz '/'
// callback req,res com arrow function
app.get('/', (req,res) => {
    res.send('Api para acompanhar lista de livros')
})


app.get('/books', (req,res) =>{
    res.status(200).send(books)
    // send() comporta textos simples e mais elaborados
})

app.post('/books',(req,res) =>{
    books.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
    // 201 Created successful response status code
    // diferente do python, em caso de arrays 
    // não existe a inclusão de dados através do append, por isso
    // utiliza o push()
})

// atalho da crase control+shift+agudo hehe

export default app
