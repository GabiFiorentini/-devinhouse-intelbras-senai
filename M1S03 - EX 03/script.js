var num1 = parseFloat(prompt("Digite o primeiro número: "))
var num2 = parseFloat(prompt("Digite o primeiro número: "))
var operacao = prompt("Qual será a operação realizada?")

var resultado = null
var texto = "O resultado da operação é: "
switch(operacao){
    case "-":
        resultado = num1 - num2
        console.log(`${texto} ${resultado}`)
        break
    
    case "+":
        resultado = num1 + num2
        console.log(`${texto} ${resultado}`)
        break
    
    case "*":
        resultado = num1 * num2
        console.log(`${texto} ${resultado}`)
        break

    case "/":
        resultado = num1 / num2
        console.log(`${texto} ${resultado}`)
        break

    default:
            console.log("Escolha uma opção válida")
}