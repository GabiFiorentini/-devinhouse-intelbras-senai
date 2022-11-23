import fs from "fs"
import { Pizza } from "../types/pizzas.types"

export function getPizzasInFile () {
    const pizzasInFile = fs.readFileSync('pizzas.json').toString() //Ler o arquivo JSON já existente
    const pizzasFileJSON: Pizza[] = JSON.parse(pizzasInFile) //Transformar em arquivo JSON novamente, pois é convertido para string no passo anterior

    return pizzasFileJSON
}
