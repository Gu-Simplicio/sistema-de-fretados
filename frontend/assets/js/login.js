function logar(){
    const selectPerfil = document.querySelector("#selectPerfil");
    const usuario = document.querySelector("#Usuario");
    const senha = document.querySelector("#Senha");

    usuario.setCustomValidity("");
    senha.setCustomValidity("");

    if (!usuario.value.trim()) {
        usuario.setCustomValidity("Informe o usuário.");
        usuario.reportValidity();
        exibeModal("Informe o usuário para entrar.", "erro");
        usuario.focus();
        return;
    }

    if (!senha.value.trim()) {
        senha.setCustomValidity("Informe a senha.");
        senha.reportValidity();
        exibeModal("Informe a senha para entrar.", "erro");
        senha.focus();
        return;
    }

    const perfil = selectPerfil.value;
    localStorage.setItem("usuario_resta", perfil);
    exibeModal("Bem-vindo! Login realizado com sucesso.", "sucesso");

    window.setTimeout(function () {
        window.location.href = "index.html";
    }, 900);
}

function sair() {
    exibeModal("Tem certeza que deseja sair?", "confirm").then(function (confirmado) {
        if (confirmado) {
            localStorage.clear();
            window.location.href = "login.html";
        }
    });
}
