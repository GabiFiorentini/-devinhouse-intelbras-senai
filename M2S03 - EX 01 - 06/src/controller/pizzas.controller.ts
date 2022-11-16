import { json, request, Request, response, Response } from "express";
import {v4 as uuidv4} from "uuid"
import fs from "fs"
import {BodyCreatePizzas, RouteParams, BodyUpdatePizza} from '../types/pizzas.types'
import { getPizzasInFile } from '../utils/getPizzasInFile'

//Cadastrar uma pizza
export function create (request: Request<{}, {}, BodyCreatePizzas>, response: Response) {
    const pizza = {
        id: uuidv4(),
        name: request.body.description,
        description: request.body.description,
        price: request.body.price,
        ingredients: request.body.ingredients
    }

    const pizzaInFileJSON = getPizzasInFile ()
    const data = [...pizzaInFileJSON, pizza] //incluir o "pizza" no array pizzaInFileJSON já existente

    fs.writeFileSync('pizzas.json', JSON.stringify(data))
    response.status(201).json(pizza)
}

//Listar todas as pizzas
export function findMany (request: Request, response: Response) {
    const pizzaInFileJSON = getPizzasInFile ()
    
    response.json(pizzaInFileJSON)
}

//Deletar um pizza
export function destroy (request: Request<RouteParams>, response: Response){
    const pizzaInFileJSON = getPizzasInFile ()

    const pizzas = pizzaInFileJSON.filter( pizza => pizza.id != request.params.id) //Remove aquilo que é igual e mantém o diferente
    
    fs.writeFileSync('pizzas.json', JSON.stringify(pizzas))

    response.json()
}

//Atualizar pizza
export function update (request: Request <RouteParams, {}, BodyUpdatePizza>, response: Response) {
    const pizzaInFileJSON = getPizzasInFile ()

    const updatePizza = pizzaInFileJSON.map( pizza => {
        if(pizza.id == request.params.id) {
            pizza.name = request.body.name || pizza.name
            pizza.description = request.body.description || pizza.description
            pizza.price = request.body.price || pizza.price
            pizza.ingredients = request.body.ingredients || pizza.ingredients
        }
        return pizza
    })

    fs.writeFileSync('pizzas.json', JSON.stringify(updatePizza))

    return response.json()
}