import fs from "fs"
import { Solicitation } from "../types/solicitations.types"

export function getSolicitationsInFile () {
    const solicitationsInFile = fs.readFileSync('solicitations.json').toString() //Ler o arquivo JSON já existente
    const solicitationsFileJSON: Solicitation[] = JSON.parse(solicitationsInFile) //Transformar em arquivo JSON novamente, pois é convertido para string no passo anterior

    return solicitationsFileJSON
}
