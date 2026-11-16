function logar(){
    const selectPerfil = document.querySelector("#selectPerfil");
    let perfil = selectPerfil.value;

    if(perfil == "estudante") {
        localStorage.setItem("usuario_resta", perfil);
    } else {
        perfil = "empresa";
        localStorage.setItem("usuario_resta", perfil)
    }

    alert("Bem vindo!");
    window.location.href = "index.html";
}

function sair() {
    if(confirm("Tem certeza que deseja sair?")) {
        localStorage.clear();
        window.location.href = "login.html";
    }
}