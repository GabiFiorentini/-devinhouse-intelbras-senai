/*
Utilizando o `forEach`, faça com que todos os valores do array abaixo dobrem de valor:

```js
var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]
```
*/

var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]
var newAarray = []

listaNumeros.forEach(function(listaNumero){
    newAarray.push(listaNumero*2)
})

console.log(newAarray)