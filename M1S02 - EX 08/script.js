var userYear = parseInt(prompt("Qual ano deseja verificar?"));
var currentYear = new Date().getFullYear();

alert("A diferença entre " + userYear + " e " + currentYear + " é de " + (currentYear - userYear) + " anos")

