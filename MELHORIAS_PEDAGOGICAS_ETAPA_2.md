# Melhorias pedagógicas — Etapa 2: linhas do tempo

## Objetivo
Tornar as linhas do tempo mais claras, legíveis e semanticamente estruturadas, mantendo a ordem e o conteúdo dos acontecimentos.

## Implementação
- A linha do tempo passou de uma sequência de elementos genéricos para uma lista ordenada (ol/li).
- Cada evento apresenta ano, título em nível de cabeçalho e descrição em parágrafo.
- Foi incluído um rótulo acessível para a lista de acontecimentos.
- Refinados espaçamento, marcador visual, hierarquia tipográfica e leitura em telas estreitas.
- Mantidos os anos e textos originais dos eventos; nenhum JSON foi alterado.
- A etapa está encadeada sobre a branch da etapa 1, incluindo também as perguntas orientadoras.

## Verificações estáticas
- Oito módulos JSON parseados.
- 49 registros e 229 eventos de linha do tempo.
- Todos os eventos conferidos têm ano numérico, título e descrição.
- Nenhuma sequência cronológica decrescente foi detectada nas listas.
- Marcação ol/li, cabeçalhos, rótulo acessível e regras responsivas conferidos no HTML.
- Não foi realizado teste visual em navegador nesta etapa.

## Checklist
- [x] Criar branch a partir da etapa pedagógica 1.
- [x] Melhorar a hierarquia visual dos eventos.
- [x] Usar estrutura semântica de lista ordenada.
- [x] Adicionar nome acessível à linha do tempo.
- [x] Ajustar apresentação em telas estreitas.
- [x] Preservar os 229 eventos existentes.
- [x] Conferir estrutura e ordem cronológica dos eventos.
- [ ] Testar visualmente em Android e computador.
- [ ] Validar leitura com leitor de tela.

## Segurança
A alteração está em branch e PR de rascunho. A versão oficial permanece sem alterações até aprovação e integração.