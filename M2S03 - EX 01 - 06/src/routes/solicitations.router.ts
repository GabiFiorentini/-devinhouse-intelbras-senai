import { Router } from "express";
import { create, findMany, findOne, updateSolicitationDelivery } from "../controller/solicitations.controller"

const solicitationsRouter = Router()

//Cadastrar um novo pedido
solicitationsRouter.post("/solicitationsRouter", create)

//Listar todos os pedidos
solicitationsRouter.get("/solicitationsRouter", findMany)

//Buscar um pedido usando o ID
solicitationsRouter.get("/solicitationsRouter/:id", findOne)

//Atualizar status do pedido "Em produção " para "Há caminho" ou "Finalizado"
solicitationsRouter.put("/solicitationsRouter/:id", updateSolicitationDelivery)

export default solicitationsRouter