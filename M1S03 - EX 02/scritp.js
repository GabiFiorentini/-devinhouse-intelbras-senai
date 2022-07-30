var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];

const listName = document.getElementById("listName")

function nameList(){
    listaConvidados.forEach(function(convidado){
        const newItem = document.createElement("li");
        listName.appendChild(newItem)
        newItem.innerHTML =  `${convidado.nome} ${convidado.sobrenome}` 
    })
}

