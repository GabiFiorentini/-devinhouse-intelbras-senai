const btn = document.getElementById('submit').addEventListener('click', teste)

function teste(){
    const numeroVerificar = document.getElementById('numero-verificar').value
    const resultadoView = document.getElementById('resultado')

    let resultado = numeroVerificar % 2 == 0 ? "Par" : "Ímpar"

    resultadoView.innerText = resultado
}
