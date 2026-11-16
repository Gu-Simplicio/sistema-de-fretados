function checaSessao() {
    if(!localStorage.getItem("usuario_resta")) {
        window.location.href = "login.html";
    } else {
        montaPag();
    }
}

function montaPag() {
    const msgSaudacao = document.querySelector("#msgSaudacao");
    const container = document.querySelector(".container");
    const perfil = localStorage.getItem("usuario_resta");
    let pagina;

    if(perfil == "empresa") {
        msgSaudacao.textContent = "Painel da Empresa"

        pagina = `<!-- Métricas (Primeira Linha) -->
        <div class="grid-metrics">
            <a class="card" href="rotas.html" >
                <div class="icon-box card-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6h12v12"/></svg>
                </div>
                <div class="info-metric">
                    <h3>8</h3>
                   <h5>Rotas Ativas</h5>
                </div>
            </a>

            <button class="card">
                <div class="icon-box card-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="info-metric">
                    <h3>124</h3>
                    <h5>Passageiros</h5>
                </div>
            </button>

            <button class="card">
                <div class="icon-box card-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="info-metric">
                    <h3>85%</h3>
                    <h5>Taxa de Ocupação</h5>
                </div>
            </button>

            <button class="card">
                <div class="icon-box card-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="11" rx="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                </div>
                <div class="info-metric">
                    <h3>5</h3>
                    <h5>Veículos</h5>
                </div>
            </button>
        </div>
        <!-- Botões de Ação do Painel -->
        <div class="grid-actions">
            <button class="card card-action">
                <div class="icon-box card-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6h12v12"/></svg>
                </div>
                <div class="info">
                    <h3>Gerenciar Rotas</h3>
                    <h5>Criar e editar rotas disponíveis</h5>
                </div>
            </button>

            <button class="card card-action">
                <div class="icon-box card-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="info">
                    <h3>Passageiros</h3>
                    <h5>Visualizar lista e check-ins</h5>
                </div>
            </button>

            <a class="card card-action" href="demandas.html">
                <div class="icon-box card-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div class="info">
                    <h3>Indicadores</h3>
                    <h5>Análise de demanda e ocupação</h5>
                </div>
            </a>

            <a class="card card-action" href="gerenciarVeiculos.html">
                <div class="icon-box card-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="11" rx="2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                </div>
                <div class="info">
                    <h3>Veículos</h3>
                    <h5>Gerenciar frota cadastrada</h5>
                </div>
            </a>

            <button class="card card-action">
                <div class="icon-box card-red">
                    <span class="currency-symbol">$</span>
                </div>
                <div class="info">
                    <h3>Mensalidades</h3>
                    <h5>Acompanhar status de pagamentos</h5>
                </div>
            </button>

            <button class="card card-action">
                <div class="icon-box card-blue ">
                    <span class="currency-symbol">@</span>
                </div>
                <div class="info">
                    <h3>Cadastrar</h3>
                    <h5>Cadastrar novos motoristas</h5>
                </div>
            </button>

        </div>`;
    } else if(perfil == "estudante") {
        msgSaudacao.textContent = "Olá, Estudante!";
        
        pagina = `<div class="campo-longo">
            <h2>Bem vindo de volta!</h2>

            <p>Sua próxima viagem: Centro - Campus</p>
            <p>Chegada Prevista: 07:46</p>
        </div>

        <div class="grid-actions">
            <a class="card" href="rotas.html" >
                <div class="icon-box card-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6h12v12"/></svg>
                </div>
                <div class="info">
                    <h3>Minhas Rotas</h3>
                    <h5>Consulte rotas disponíveis</h5>
                </div>
            </a>

            <button class="card">
                <div class="icon-box card-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                        </g>
                    </svg>
                </div>
                <div class="info-metric">
                    <h3>Rastreamento</h3>
                    <h5>Acompanhe em tempo real</h5>
                </div>
            </button>

            <button class="card">
                <div class="icon-box card-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1M5 20h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1" />
                    </svg>
                </div>
                <div class="info-metric">
                    <h3>Check-in</h3>
                    <h5>Confirme seu embarque</h5>
                </div>
            </button>

            <button class="card">
                <div class="icon-box card-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
                            <circle cx="12" cy="12" r="10" />
                        </g>
                    </svg>
                </div>
                <div class="info-metric">
                    <h3>Solicitar Rota</h3>
                    <h5>Peça uma nova rota</h5>
                </div>
            </button>

            <button class="card">
                <div class="icon-box card-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.4 7.4 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.4 7.4 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.9 8.9 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.9 8.9 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="info-metric">
                    <h3>Avisos</h3>
                    <h5>Veja comunicados importantes</h5>
                </div>
            </button>
        </div>`;
    }

    container.innerHTML = pagina;
}