function voltarPagina() {
    window.history.length > 1 ? window.history.back() : window.location.href = "index.html";
}

function confirmarRemocao(event) {
    event.preventDefault();
    const destino = event.currentTarget.getAttribute("href");
    exibeModal("Deseja remover este veículo?", "confirm").then(function (confirmado) {
        if (confirmado) {
            window.location.href = destino;
        }
    });
    return false;
}

function mostrarMensagem(form, mensagem) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        exibeModal(mensagem, "sucesso");
        form.reset();
    });
}

document.querySelectorAll("[data-filter-target]").forEach(function (input) {
    input.addEventListener("input", function () {
        const termo = input.value.toLowerCase();
        document.querySelectorAll(input.dataset.filterTarget).forEach(function (item) {
            item.hidden = !item.textContent.toLowerCase().includes(termo);
        });
    });
});
