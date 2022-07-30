const btnFormClick = document.querySelector(".btn-submit");

function functView(){
    let name = document.querySelector("#input-name").value;
    let userEmail = document.querySelector("#input-email").value;
    let message = document.querySelector("#message").value;

    alert("Nome: " + name + "\nEmail: " + userEmail + "\nDescrição:" + message);
}