function logar(){
    var nome = document.getElementById("Usuario").value;
    alert("Bem vindo "+nome);
    window.location.href = "Empresa.html";
    window.name = nome;
}