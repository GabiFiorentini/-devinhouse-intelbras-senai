const data = document.getElementById('data').addEventListener('change', estacao)

function estacao(){
    const inputData = document.getElementById('data').value

    const conversaoData = new Date(inputData)

    let  diaData = conversaoData.getDate()
    diaData = diaData + 1

    let mesData = conversaoData.getMonth()
    mesData = mesData + 1

    if(diaData <= 22 && mesData <= 3 || diaData >=21 && mesData == 12){
        mensagemTela("Verão")
        exibirImagem("https://s1.static.brasilescola.uol.com.br/galeria/images/2d28fe1a3b1ed960bca2e3798803c6b5.jpg")
    }else if(diaData <= 21 && mesData <= 6 ||diaData >= 21 && mesData == 3){
        mensagemTela("Outono")
        exibirImagem("https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/03/outono-caracteristicas-quando-se-inicia-e-estacao-do-ano-no-brasil.jpeg")
    }else if(diaData <= 21 && mesData <= 9 || diaData >= 21 && mesData == 6){
        mensagemTela("Inverno")
        exibirImagem("https://uploads.metropoles.com/wp-content/uploads/2022/05/19061434/geada-1-600x400.jpg")
    }else{
        mensagemTela("Primavera")
        exibirImagem("https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/primavera-destinos-norte-capa-01.jpg")
    }
}

function mensagemTela(estacaDoAno){
    const estacao = document.getElementById('estacao')
    estacao.innerText = estacaDoAno
}

function exibirImagem(imagemLink){
    const imagem = document.getElementById('imagem')
    imagem.style.visibility = 'visible'
    imagem.setAttribute('src', imagemLink)
}