# Melhorias pedagógicas — Etapa 1

## Objetivo
Acrescentar uma camada de leitura orientada ao acervo sem substituir ou remover os conteúdos históricos existentes.

## Implementação
- Cada cartão histórico passa a apresentar o acordeão **“Perguntas para estudar e debater”**.
- As três perguntas são construídas a partir do título, tema, sociedades envolvidas e recorte temporal do próprio registro.
- As perguntas orientam a análise do contexto e dos antecedentes, a participação dos grupos e as relações de poder, além de mudanças e permanências.
- As respostas devem ser fundamentadas no desenvolvimento histórico e na linha do tempo já existentes.
- O texto inserido passa por escape HTML; a apresentação tem estilos próprios e responsivos herdados do layout atual.
- Nenhum JSON foi alterado; nenhum registro foi removido ou reescrito.

## Verificações estáticas
- Oito arquivos JSON lidos e parseados.
- 49 registros encontrados.
- 49 identificadores únicos.
- Campos necessários para as perguntas presentes em todos os registros.
- Função geradora, chamada no cartão, escape HTML, estilos e função de formatação de datas localizados no HTML.
- Não foi executado teste em navegador nesta etapa; a conferência visual e a experiência com estudantes permanecem pendentes.

## Checklist da etapa
- [x] Criar branch isolada a partir da versão oficial.
- [x] Adicionar perguntas orientadoras aos cartões históricos.
- [x] Relacionar perguntas aos dados específicos de cada registro.
- [x] Preservar os oito módulos JSON e os registros existentes.
- [x] Conferir estrutura e unicidade dos 49 registros.
- [x] Registrar relatório da etapa.
- [ ] Testar visualmente em Android e computador.
- [ ] Avaliar clareza das perguntas em uso pedagógico real.

## Próximas etapas sugeridas
1. Melhorar a leitura e a apresentação de linhas do tempo, imagens e mapas, sem inserir elementos sem fonte ou contexto.
2. Criar recursos de apoio ao professor, com propostas de discussão e atividades.
3. Evoluir a pesquisa com filtros por tema, século, personagem e acontecimento.
4. Avaliar recursos de fontes históricas e documentos contextualizados.

## Segurança da publicação
Esta etapa está isolada em branch e PR. A versão oficial não é alterada até a revisão e integração aprovadas.
