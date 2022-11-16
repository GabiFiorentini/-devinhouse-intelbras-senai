export interface BodyCreateSolicitation {
    client_name: string
    cpf: string
    client_address: string
    telephone: string
    payment_method: string
    note: string
    order: string
}

export interface Solicitation extends BodyCreateSolicitation {
    id: string
}

export interface RouteParams {
    id: string
}

export interface BodyUpdateSolicitationOutForDelivery {
    client_name?: string
    cpf?: string
    client_address?: string
    telephone?: string
    payment_method?: string
    note?: string
    order?: string
}
