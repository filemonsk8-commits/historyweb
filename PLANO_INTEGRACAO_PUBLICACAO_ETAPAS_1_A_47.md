# Plano de integração e publicação — etapas 1 a 47

## Objetivo
Preparar uma integração controlada da modernização do HistoryWeb, preservando a versão oficial, o conteúdo existente e a possibilidade de revisão antes da publicação.

## Estratégia recomendada: uma integração cumulativa
As etapas foram desenvolvidas em uma cadeia de branches sucessivas. A branch final da etapa 47 contém a sequência de commits desde a base original. Por isso, a forma mais segura e simples de integrar o conjunto é revisar uma única proposta cumulativa da branch final para `main`, em vez de tentar mesclar 47 PRs isoladamente em ordem.

Mesclar cada PR individualmente exigiria alterar repetidamente as bases das PRs seguintes e aumentaria o risco de divergências, conflitos e integração parcial. A proposta cumulativa mantém a sequência histórica de commits e apresenta o resultado completo em uma única revisão.

## Fases propostas

### Fase 1 — Congelamento e preservação
- Manter `main` sem alterações até a aprovação final.
- Preservar a branch de backup `backup/antes-modernizacao-2026-11-18`.
- Não apagar branches ou PRs de etapas anteriores durante a revisão.
- Usar a branch final da cadeia como candidata, sem reescrever os commits anteriores.

### Fase 2 — Revisão da proposta cumulativa
- Conferir o diff completo entre `main` e a candidata.
- Revisar separadamente os arquivos de aplicação (`index.html`, `manifest.json`, `sw.js` e ícones).
- Revisar os oito módulos JSON e os relatórios pedagógicos.
- Confirmar que os dados e funções originais foram preservados.
- Verificar os conflitos reportados pelo GitHub e resolver somente os que forem efetivamente identificados.
- Executar validação de JSON, JavaScript, manifesto e referências locais.

### Fase 3 — Testes de aceitação
- Android/Chrome: instalação, abertura standalone, atualização e modo offline. O usuário já confirmou esses testes na versão de teste.
- Desktop: navegação, pesquisa, leitura, responsividade, teclado e instalação quando suportada.
- Safari/iOS, se disponível: abertura, ícone e comportamento offline.
- Verificar a atualização do Service Worker após uma nova versão.
- Repetir testes dos oito módulos e da busca global.
- Registrar claramente os testes automatizados/estáticos e os testes manuais, sem confundir seus resultados.

### Fase 4 — Aprovação e publicação
- Apresentar o resultado da revisão e os testes pendentes.
- Solicitar autorização explícita para mesclar a proposta cumulativa em `main`.
- Somente após autorização, realizar a mesclagem.
- Conferir a configuração do GitHub Pages e aguardar a publicação.
- Testar a URL oficial após a publicação e manter a branch de backup disponível para reversão.

## Critérios para liberar a publicação
- Nenhum conflito pendente.
- Diff cumulativo revisado.
- JSON e manifesto válidos.
- Referências locais essenciais existentes.
- Testes de navegação, busca e módulos concluídos.
- PWA aprovado nos dispositivos disponíveis.
- Aprovação expressa do responsável pelo projeto.

## Situação no momento deste plano
- A cadeia de etapas 1–47 está preservada em branches.
- A versão de teste PWA foi validada pelo usuário em Android/Chrome, inclusive sem internet.
- A auditoria estrutural registrou 8 módulos, 49 registros, 49 IDs únicos e 229 eventos de linha do tempo.
- A publicação oficial ainda não foi realizada.
- Este documento e a proposta cumulativa são preparatórios: não mesclam PRs, não alteram `main` e não publicam o site.

## Decisão técnica
Recomenda-se manter as PRs individuais como histórico de trabalho e usar uma PR cumulativa final para a revisão e aprovação do conjunto. Não é recomendável mesclar automaticamente as 47 PRs em sequência sem antes revisar o diff consolidado e executar os testes de aceitação.
