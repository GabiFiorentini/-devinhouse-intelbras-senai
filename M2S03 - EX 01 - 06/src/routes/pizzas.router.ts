import { Router } from 'express';
import { create, findMany, destroy, update } from '../controller/pizzas.controller';

const pizzas = Router()

//----Gerenciamento de pizzas----
//Cadastrar uma pizza
pizzas.post('/pizzas', create)

//Listar todas as pizzas
pizzas.get('/pizzas', findMany)

//Deletar um pizza
pizzas.delete('/pizzas/:id', destroy)

//Atualizar pizza
pizzas.put('/pizzas/:id', update)

export default pizzas

