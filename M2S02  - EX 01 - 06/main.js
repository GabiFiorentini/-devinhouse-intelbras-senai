const { response, request } = require('express')
const express = require('express') //Importar a biblioteca no arquivo principal 

const {v4: uuidv4} = require ('uuid') //Importa a versão 4 do uuid (gerador de ID para utilizar em listas)

const app = express() //Atribuir o express a uma variável principal
app.use(express.json()) //Atribui como padrao de entrada e saída o formato JSON

let pizzas = []
const solicitations = []

//Listar todas as pizzas
app.get('/pizzas', (request, response) => {
    const nameQuery = request.query.name || ""
    const filterPizza = pizzas.filter(
        pizza => pizza.name.toUpperCase().includes(nameQuery.toUpperCase())
    )

    response.json(filterPizza)
})

//Cadastrar uma nova pizza
app.post('/pizzas', (request, response) => {
    const {name, description, price, ingredients} = request.body
    const pizza = {
        id: uuidv4(),
        name,
        description,
        price,
        ingredients
    }

    pizzas.push(pizza)
    response.status(201).json(pizza)
})

//Listar todos os pedidos
app.get('/solicitations', (request, response) => {
    response.status(200).json(solicitations)
})

//Cadastrar um novo pedido
app.post('/solicitations', (request, response) => {
    const {client_name, cpf, client_address, telephone, payment_method, note, client_order} = request.body
    const order = {
        id: uuidv4(),
        client_name,
        cpf,
        client_address,
        telephone,
        payment_method,
        note,
        client_order
    }

    solicitations.push(order)
    response.json(order)
})

//Buscar um pedido usando o ID
app.get('/solicitations/:id', (request, response) => {
    const {id} = request.params.id
    const orderFind = solicitations.find( order => order.id == id)  

    if(!orderFind) {
        return response.status(404).json({error: "Item não encontrado"})
    }
    response.json(orderFind)
})


//Configuração do servidor Express porta 3333
app.listen(3333, (request, response) => {
    console.log("Servidor online")
})