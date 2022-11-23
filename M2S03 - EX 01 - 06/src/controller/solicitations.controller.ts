import { json, request, Request, response, Response } from "express";
import {v4 as uuidv4} from "uuid"
import fs from "fs"
import {BodyCreateSolicitation, RouteParams, BodyUpdateSolicitationOutForDelivery} from "../types/solicitations.types"
import {getSolicitationsInFile} from "../utils/getSolicitationsInFile"

//Cadastrar um novo pedido
export function create (request: Request<{},{},BodyCreateSolicitation>, response: Response) {
    const solicitation = {
        id: uuidv4(),
        client_name: request.body.client_name,
        cpf: request.body.cpf,
        client_address: request.body.client_address,
        telephone: request.body.telephone,
        payment_method: request.body.payment_method,
        note: request.body.note,
        order: "Em produção"
    }

    const solicitationsInFileJSON = getSolicitationsInFile()
    const data = [...solicitationsInFileJSON, solicitation] //incluir o "pedido" no array pizzaInFileJSON já existente

    fs.writeFileSync('solicitations.json', JSON.stringify(data))
    response.status(201).json(solicitation)
}

//Listar todos os pedidos
export function findMany (request: Request, response: Response) {
    const solicitationsInFileJSON = getSolicitationsInFile()
    
    response.json(solicitationsInFileJSON)
}

//Listar um pedido
export function findOne (request: Request<RouteParams>, response: Response) {
    const solicitationsInFileJSON = getSolicitationsInFile()

    const solicitations = solicitationsInFileJSON.find(solicitation => solicitation.id == request.params.id) 

    response.json(solicitations)
}

//Atualizar status do pedido "Em produção " para "Há caminho"
export function updateSolicitationDelivery (request: Request<RouteParams, {}, BodyUpdateSolicitationOutForDelivery>, response: Response) {
    const solicitationsInFileJSON = getSolicitationsInFile()

    const changeStatusOrder = solicitationsInFileJSON.map( solicitation => {
        if(solicitation.id == request.params.id && solicitation.order == "Em produção"){
            solicitation.client_name = solicitation.client_name
            solicitation.cpf = solicitation.cpf
            solicitation.client_address = solicitation.client_address
            solicitation.telephone = solicitation.telephone
            solicitation.payment_method = solicitation.payment_method
            solicitation.note = solicitation.note
            solicitation.order = "Há caminho"

        }else if(solicitation.id == request.params.id && solicitation.order == "Há caminho"){
            solicitation.client_name = solicitation.client_name
            solicitation.cpf = solicitation.cpf
            solicitation.client_address = solicitation.client_address
            solicitation.telephone = solicitation.telephone
            solicitation.payment_method = solicitation.payment_method
            solicitation.note = solicitation.note
            solicitation.order = "Finalizado"
        }
        
        return solicitation
    })

    fs.writeFileSync('solicitations.json', JSON.stringify(changeStatusOrder))

    return response.json()
}

/*
        id: uuidv4(),
        client_name: request.body.client_name,
        cpf: request.body.cpf,
        client_address: request.body.client_address,
        telephone: request.body.telephone,
        payment_method: request.body.payment_method,
        note: request.body.note,
        order: "Em produção"
*/