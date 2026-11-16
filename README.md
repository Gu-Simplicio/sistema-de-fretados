# Sistema de fretados

### Em desenvolvimento

## Alterações por IA

Foram construídas as telas que estavam previstas nos wireframes do documento do
projeto, mantendo o padrão visual já utilizado no frontend e utilizando dados
estáticos inseridos diretamente no HTML. Não foram adicionadas integrações com
API, banco de dados ou backend para essas telas.

Foram criadas as páginas de passageiros e check-ins, controle de mensalidades,
solicitação de nova rota, detalhes de uma rota, mural de avisos, rastreamento em
tempo real, check-in de embarque e cadastro de veículo. Também foi criada uma
folha de estilos compartilhada em `frontend/assets/css/telas.css`, com componentes
para formulários, cards, indicadores, status, listas, mapa ilustrativo, QR Code e
layout responsivo.

O arquivo `frontend/assets/js/telas.js` foi adicionado para comportamentos
simples que não poderiam ser realizados apenas com HTML e CSS, como filtros de
listas, confirmação de formulários, confirmação de remoção de veículos e
interações do check-in.

As telas existentes também foram complementadas. O formulário de criação de
rotas passou a conter origem, destino, horários, valor, vagas, veículo e dias
de operação. O gerenciamento de veículos recebeu um link funcional para o
cadastro de novos veículos, e os cards de rotas passaram a abrir a tela de
detalhes da rota. Os cards dos dashboards foram conectados às telas de
passageiros, indicadores, veículos, mensalidades, cadastro de motorista,
rastreamento, check-in, solicitação de rota e avisos.

O dashboard separado `frontend/estudante.html` foi removido, pois a alternância
entre os dashboards de estudante e empresa já é feita pelo
`frontend/index.html` e pelo `frontend/assets/js/index.js`, usando o perfil
armazenado no `localStorage`.

Também foram corrigidos os retornos de navegação. Links vazios, botões com
atributo `href` inválido e referências ao dashboard removido foram substituídos
por destinos funcionais, principalmente `index.html`, que mantém a seleção do
dashboard conforme o perfil ativo. Os ícones de edição e remoção de veículos
também passaram a executar ações coerentes com a interface estática.

Após as alterações, foram verificadas a sintaxe dos arquivos JavaScript, a
estrutura dos arquivos HTML, a existência das referências locais e a ausência
de erros de whitespace no diff.