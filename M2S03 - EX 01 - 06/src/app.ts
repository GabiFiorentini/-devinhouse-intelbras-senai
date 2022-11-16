//Principal arquivo do projeto, onde será criada a estrutura para exibição dos dados recebidos das rotas

import express  from 'express' //importa o express (framework) para fornecer recursos minimos para trocar de informações através de requisições HTTP
import cors from 'cors';
import cron from 'node-cron'

import pizzas from './routes/pizzas.router'
import solicitationsRouter from './routes/solicitations.router'
//import {sendEmailSolicitationInProduction} from '../src/jobs/sendEmailSolicitationInProduction'

const app = express() //Atribuir os recursos do express a nossa principal váriavel
app.use(express.json())
app.use(cors())
app.use(pizzas)
app.use(solicitationsRouter)

//cron.schedule('*/1 * * * *', sendEmailSolicitationInProduction)
export default app