const contasClientes = [
    {
      id: 1,
      nome: 'Cliente 01',
      saldo: 500,
      senha: "pedro48",
    },
    {
      id: 2,
      nome: 'Cliente 02',
      saldo: 3000,
      senha: "otavio54",
    },
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 5000,
      senha: "Maria25",
    },
  ];

var selectAccount = document.getElementById("select-account")

function selectionItem(contasClientes){
  contasClientes.forEach(function(cliente){
    var newOption = document.createElement("option")
    selectAccount.appendChild(newOption)
    newOption.innerText = cliente.id
  })
}
  
document.onload = onloadSelect()

function onloadSelect(){
  selectionItem(contasClientes)
}

const btnOperacao = document.getElementById('btn-confirmar').addEventListener('click', operacao)

function senha(contaSelecionada){
  const senha  = document.getElementById('senha').value
  const validarConta = mapearConta(contaSelecionada)

  if(senha != validarConta.senha){
    exibirMensagem(`Senha incorreta`)
  }
}



function operacao(){
  //Selecionar o tipo de operação
  const selectOperacao = document.getElementById("select-operacao")
  const operacaoSelecionada = selectOperacao.options[selectOperacao.selectedIndex].text

  //Receber a conta 
  const contaSelecionada = selectAccount.options[selectAccount.selectedIndex].text

  //Receber os valores de saque
  const valor = document.getElementById('valor').value

  if(operacaoSelecionada === 'Sacar'){
    if(contaSelecionada == ""){
       return exibirMensagem(`Insira o número da conta`)
    }
    sacar(contaSelecionada, valor)
  }else if(operacaoSelecionada === 'Depositar'){
    if(contaSelecionada == ""){
      return exibirMensagem(`Insira o número da conta`)
   }
    depositar(contaSelecionada, valor)
  }

  senha(contaSelecionada)
}


function sacar(contaSelecionada, valor){
  let contaSaque = mapearConta(contaSelecionada)

  if(valor <= 0){
    exibirMensagem(`Valor inválido`)
  }else if(valor > contaSaque.saldo){
    exibirMensagem(`Saldo insuficiente \n  Saldo atual:${contaSaque.saldo}`)
  }else{
    let novoValor = contaSaque.saldo - valor
    contaSaque.saldo = novoValor
    exibirMensagem(`Saque realizado com sucesso \n Saldo Atual: ${contaSaque.saldo}`)
  }
}

function depositar(contaSelecionada, valor){
  let contaDeposito = mapearConta(contaSelecionada)
  console.log(valor)

  if(valor <= 0){
    exibirMensagem(`Valor inválido`)
  }else{
    let novoValor = contaDeposito.saldo + parseFloat(valor) 
    console.log(novoValor)
    contaDeposito.saldo = novoValor
    exibirMensagem(`Deposito realizado com sucesso \n Saldo Atual: ${contaDeposito.saldo}`)
  }

}


function mapearConta(contaSelecionada){
  let conta = contasClientes.find(function(value, index, arr){
    return arr[index].id == contaSelecionada
  })

  return conta
}

function exibirMensagem (mensagem){
  const mensagemView = document.getElementById('mensagem')
  mensagemView.innerText = mensagem
}



