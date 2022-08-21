var convidado_01 = {
    nome: "José",
    sobrenome: "Silva",
    setor: "camarote",
    idade: 17,
}

var convidado_02 = {
    nome: "Maria",
    sobrenome: "Ferreira",
    setor: "camarote",
    idade: 20,
}

var convidado_03 = {
    nome: "Augusto",
    sobrenome: "Santos",
    setor: "pista",
    idade: 15,
}

var convidado_04 = {
    nome: "Cesar",
    sobrenome: "Sanches",
    setor: "pista",
    idade: 25,
}

var convidado_05 = {
    nome: "Vitoria",
    sobrenome: "Fernandes",
    setor: "arquibancada",
    idade: 19,
}

var convidado_06 = {
    nome: "Amanda",
    sobrenome: "Dias",
    setor: "arquibancada",
    idade: 16,
}

const camarote = document.getElementById("listaCamarote")
const arquibancada = document.getElementById("listaArquibancada")
const pista =  document.getElementById("listaPista")

var listaDeConvidados = [convidado_01 , convidado_02, convidado_03, convidado_04, convidado_05, convidado_06 ]

function liberarBebidas(listaDeConvidados){
    var liberarBebida = []
    listaDeConvidados.forEach(function(convidado){
        if(convidado.idade > 18){
            convidado.operBar = "true"
            liberarBebida.push(convidado)
        }else{
            convidado.operBar = "false"
            liberarBebida.push(convidado)
        }
    })

    return liberarBebida
}

var convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados)

function separarCamarote(convidadosComBebidasProcessada){
    var listaFiltradaCamarote = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "camarote")
    listaFiltradaCamarote.forEach(function(convidado){
        const newItem = document.createElement("li")
        camarote.appendChild(newItem)
        if(convidado.operBar == "true"){
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😀`
        }else{
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😪`
        }
    })
}

function separarPista(convidadosComBebidasProcessada){
    var listaFiltradaPista = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "pista")
    listaFiltradaPista.forEach(function(convidado){
        const newItem = document.createElement("li")
        pista.appendChild(newItem)
        if(convidado.operBar == "true"){
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😀`
        }else{
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😪`
        }
    })
}

function separarArquibancada(convidadosComBebidasProcessada){
    var listaFiltradaArquibancada = convidadosComBebidasProcessada.filter(convidado => convidado.setor === "pista")
    listaFiltradaArquibancada.forEach(function(convidado){
        const newItem = document.createElement("li")
        arquibancada.appendChild(newItem)
        if(convidado.operBar == "true"){
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😀`
        }else{
            newItem.innerText = `${convidado.nome} ${convidado.sobrenome}  😪`
        }
    })
}

var listaPista = separarPista(convidadosComBebidasProcessada)
var listaArquibancada = separarArquibancada(convidadosComBebidasProcessada)
var listaCamarote = separarCamarote(convidadosComBebidasProcessada)
