const btnClassificar = document.getElementById('btn-classificar').addEventListener('click', verificar)

function verificar(){
    const idadeUsuario = document.getElementById('idade-usuario').value

    if(idadeUsuario <= 15){
        exibirMensagem("Jovem")
    }else if(idadeUsuario <= 64){
        exibirMensagem("Adulto")
    }else{
        exibirMensagem("Idoso")
    }

}

function exibirMensagem(resultado){
    const exibirTela = document.getElementById('resultado')
    exibirTela.innerText = resultado
}