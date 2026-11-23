function exibeModal(txt, tipoModal) {
    const tipoPermitido = ["sucesso", "erro", "confirm"].includes(tipoModal) ? tipoModal : "sucesso";
    const existente = document.querySelector("#modalAviso");
    if (existente) existente.remove();

    return new Promise(function (resolver) {
        const modal = document.createElement("div");
        modal.id = "modalAviso";
        modal.className = `modal-aviso modal-${tipoPermitido}`;
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");

        const ehConfirmacao = tipoPermitido === "confirm";
        modal.setAttribute("aria-label", ehConfirmacao ? "Confirmação" : tipoPermitido === "erro" ? "Aviso de erro" : "Aviso de sucesso");

        const acoes = ehConfirmacao
            ? '<button class="modal-aviso-cancelar" type="button">Cancelar</button><button class="modal-aviso-confirmar" type="button">Confirmar</button>'
            : '<button class="modal-aviso-acao" type="button">OK</button>';

        modal.innerHTML = `
            <div class="modal-aviso-caixa" role="document">
                <button class="modal-aviso-fechar" type="button" aria-label="Fechar">×</button>
                <div class="modal-aviso-icone" aria-hidden="true">${tipoPermitido === "erro" ? "!" : ehConfirmacao ? "?" : "✓"}</div>
                <p>${String(txt).replace(/[&<>"']/g, function (char) {
                    return {"&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#039;"}[char];
                })}</p>
                <div class="modal-aviso-acoes">${acoes}</div>
            </div>`;

        document.body.appendChild(modal);

        function fechar(resultado) {
            modal.remove();
            resolver(resultado);
        }

        modal.querySelector(".modal-aviso-fechar").addEventListener("click", function () { fechar(false); });
        modal.addEventListener("click", function (event) {
            if (event.target === modal) fechar(false);
        });

        if (ehConfirmacao) {
            modal.querySelector(".modal-aviso-cancelar").addEventListener("click", function () { fechar(false); });
            modal.querySelector(".modal-aviso-confirmar").addEventListener("click", function () { fechar(true); });
            modal.querySelector(".modal-aviso-cancelar").focus();
        } else {
            modal.querySelector(".modal-aviso-acao").addEventListener("click", function () { fechar(false); });
            modal.querySelector(".modal-aviso-acao").focus();
        }

        modal.addEventListener("keydown", function (event) {
            if (event.key === "Escape") fechar(false);
        });
    });
}
