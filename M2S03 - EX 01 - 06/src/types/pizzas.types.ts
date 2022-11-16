export interface BodyCreatePizzas {
    name: string
    description: string
    price: string
    ingredients: string[]
}

export interface Pizza extends BodyCreatePizzas {
    id: string
}

export interface RouteParams {
    id: string
}

export interface BodyUpdatePizza {
    name?: string
    description?: string
    price?: string
    ingredients?: string[]

    //O simbolo ? informar que aquele parametro pode ou não ser obrigatório
}