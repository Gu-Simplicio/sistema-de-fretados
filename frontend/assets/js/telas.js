function voltarPagina() {
    window.history.length > 1 ? window.history.back() : window.location.href = "index.html";
}

function confirmarRemocao(event) {
    if (!window.confirm("Deseja remover este veículo?")) {
        event.preventDefault();
    }
    return true;
}

function mostrarMensagem(form, mensagem) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(mensagem);
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
