# Melhoria — atualização automática da PWA

## Objetivo
Reduzir a necessidade de desinstalar o HistoryWeb ou limpar os dados do navegador quando uma nova versão é publicada.

## Alterações
- Atualiza o cache da PWA para `historyweb-pwa-v4`.
- Pré-carrega os arquivos com solicitação de rede, evitando reaproveitar cópias HTTP antigas durante a instalação do novo cache.
- Configura o registro do Service Worker com `updateViaCache: 'none'`.
- Solicita verificação de atualização ao abrir o app, ao recuperar a conexão, ao voltar para a aba e ao recuperar o foco.
- Recarrega a página quando a nova versão assume o controle, para mostrar o conteúdo atualizado.
- Usa estratégia network-first para navegação: online recebe a página publicada; offline utiliza a última cópia armazenada.
- Mantém a limpeza restrita aos caches antigos com prefixo `historyweb-pwa-` e ao cache legado conhecido.

## Preservação de dados
A alteração não chama `localStorage.clear()`, `sessionStorage.clear()`, `indexedDB.deleteDatabase()` nem limpa os dados do navegador. A rotina de ativação remove somente caches antigos do próprio aplicativo. O HistoryWeb atual não possui registros pessoais de usuário armazenados pela aplicação.

## Validação realizada
- Revisão estática dos pontos de registro e atualização do Service Worker.
- Conferência da mudança de versão do cache e da estratégia de navegação online/offline.
- Nenhum módulo JSON ou conteúdo histórico foi alterado.

## Testes pendentes
- Teste em aparelho Android com aplicativo já instalado, sem desinstalar e sem limpar dados.
- Teste offline após a atualização.
- Teste em computador e verificação de comportamento em atualizações subsequentes.
