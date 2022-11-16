"use strict";
//Principal arquivo do projeto, onde será criada a estrutura para exibição dos dados recebidos das rotas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //importa o express (framework) para fornecer recursos minimos para trocar de informações através de requisições HTTP
const cors_1 = __importDefault(require("cors"));
const app = express_1.default; //Atribuir os recursos do express a nossa principal váriavel
app.use(express_1.default.json());
app.use((0, cors_1.default)());
exports.default = app;
