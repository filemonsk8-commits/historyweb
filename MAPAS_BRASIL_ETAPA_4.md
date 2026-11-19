# Mapas históricos do Brasil — Etapa 4

## Objetivo
Ampliar o catálogo de mapas do HistoryWeb com uma seleção inicial sobre a formação territorial e administrativa do Brasil, preservando os módulos históricos existentes.

## Mapas incluídos
1. **1534 — Capitanias hereditárias:** divisão concedida pela Coroa portuguesa; a representação não significa controle efetivo e uniforme do território. Fonte: https://commons.wikimedia.org/wiki/File:Brazil_in_1534.svg
2. **1709 — Divisão administrativa colonial:** unidades administrativas no contexto da expansão da mineração. Fonte: https://commons.wikimedia.org/wiki/File:Brazil_in_1709.svg
3. **1750 — Tratado de Madri:** configuração territorial no contexto das negociações ibéricas; o tratado não produziu fronteiras estáveis automaticamente. Fonte: https://commons.wikimedia.org/wiki/File:Brazil_in_1750.svg
4. **1822 — Independência:** divisão territorial no início do Império, contextualizada pelas guerras e disputas de consolidação do Estado. Fonte: https://commons.wikimedia.org/wiki/File:Brazil_in_1822.svg
5. **1889 — Transição para a República:** províncias no momento da mudança de regime e sua transformação em estados. Fonte: https://commons.wikimedia.org/wiki/File:Brazil_in_1889.svg

## Critérios pedagógicos
- Cada mapa é associado a um registro já existente de `brasil.json` por meio de `evento_id`.
- Cada entrada apresenta contexto, período, texto alternativo, autoria, fonte e licença.
- As legendas evitam tratar reivindicações diplomáticas ou divisões administrativas como domínio territorial uniforme.
- As territorialidades indígenas são mencionadas para evitar que as linhas coloniais sejam tomadas como representação de um espaço vazio.
- As cinco imagens são servidas pelo Wikimedia Commons sob licença CC BY-SA 4.0.

## Preservação
- O catálogo `mapas-historicos.json` passa de 5 para 10 entradas.
- Nenhum dos oito módulos JSON históricos foi alterado.
- A estrutura de exibição existente já carrega o catálogo e associa mapas pelo ID do evento; não foi necessário alterar o HTML nesta etapa.

## Verificação estática
- [x] Cinco mapas adicionados.
- [x] IDs únicos no catálogo.
- [x] Todos os `evento_id` correspondem a registros existentes em `brasil.json`.
- [x] Contexto, texto alternativo, autoria, fonte e licença presentes.
- [x] URLs de imagem seguem o domínio e prefixo permitidos pelo código.
- [x] `brasil.json` preservado sem alterações.
- [ ] Conferência visual das cinco imagens em Android.
- [ ] Conferência visual em computador.
- [ ] Verificação com leitor de tela.
- [ ] Teste de carregamento real das imagens e avaliação de alternativas offline.

## Observação
Os mapas são representações históricas modernas, não necessariamente documentos produzidos na época retratada. O texto de contexto deve ser lido junto de cada imagem.
