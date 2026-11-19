# Etapa 13 — Planejador de aulas

## Objetivo
Oferecer ao professor um roteiro editável para organizar aulas de História, Sociologia, Filosofia e Ciências Humanas, integrado à Área do Professor do HistoryWeb.

## Implementação
- Formulário de planejamento com turma/série, data, componente curricular, duração e tema.
- Campo para objetivos de aprendizagem.
- Cinco momentos didáticos:
  1. Problematização.
  2. Contextualização.
  3. Investigação.
  4. Socialização.
  5. Síntese e fechamento.
- Campos para recursos, adaptações/acessibilidade e evidências de aprendizagem/avaliação.
- Botão para imprimir ou salvar em PDF pelo navegador e botão para limpar o formulário.
- Estilos responsivos para telas estreitas e regras de impressão A4.

## Privacidade
- O formulário não envia os dados nem os grava em armazenamento persistente do HistoryWeb.
- O professor deve imprimir ou salvar em PDF antes de sair da página.
- A ferramenta não solicita identificação nominal de estudantes.

## PWA e preservação
- Cache principal atualizado de `historyweb-pwa-v8` para `historyweb-pwa-v9`.
- Os oito módulos históricos JSON não foram alterados.
- Nenhuma dependência externa foi adicionada.

## Validação estática
- Sintaxe do JavaScript inline conferida sem erros.
- Sintaxe do service worker conferida sem erros.
- Campos, cinco momentos didáticos, ações de impressão e limpeza conferidos.
- Estilos responsivos e de impressão identificados.
- Alterações limitadas a `index.html`, `sw.js` e este relatório.

## Testes pendentes
- Conferir preenchimento e impressão/PDF em computador.
- Conferir visualização em Android.
- Testar atualização da PWA e acesso offline.
- Verificar navegação por teclado e leitor de tela.
- Avaliar a utilidade do roteiro em uma aula real.
