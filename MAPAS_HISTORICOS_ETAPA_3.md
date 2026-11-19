# Etapa pedagógica 3 — mapas históricos contextualizados

## Objetivo
Acrescentar mapas históricos associados a registros específicos, com contextualização temporal, explicação didática e atribuição de autoria/licença.

## Primeira seleção
- Pré-História: rotas propostas de dispersão de Homo sapiens.
- Antiguidade: Crescente Fértil e organização administrativa do Império Romano por volta de 395.
- Idade Média: principais rotas comerciais europeias no final do período medieval.
- Idade Moderna: viagens, contatos, rotas e reivindicações portuguesas na expansão ultramarina.

## Implementação
- Novo catálogo `mapas-historicos.json`, separado dos oito módulos de conteúdo.
- Associação dos mapas pelo ID do registro histórico.
- Seção expansível “Consultar mapas históricos” somente nos cartões que possuem mapas.
- Cada mapa apresenta título, período, texto contextual, texto alternativo, autoria, licença e link para a fonte.
- Imagens carregadas sob demanda e dimensionadas para celular e computador.
- URLs de imagem limitadas ao endpoint de arquivos do Wikimedia Commons.
- O catálogo é carregado sob demanda; falha no catálogo não impede a leitura do conteúdo histórico.

## Cuidados históricos e pedagógicos
- Datas e rotas das migrações humanas são apresentadas como estimativas e hipóteses científicas.
- O Crescente Fértil é explicado como região, não como Estado.
- O mapa romano é identificado especificamente em torno do ano 395, sem confusão com a extensão máxima do Império.
- O mapa comercial medieval informa que representa circuitos europeus selecionados.
- As áreas de reivindicação portuguesas não são descritas como controle territorial uniforme.

## Limitações conhecidas
- As imagens são servidas pelo Wikimedia Commons e, portanto, dependem de conexão com a internet. O texto dos módulos continua disponível offline; a cópia local otimizada dos mapas poderá ser tratada numa etapa posterior.
- Testes visuais em Android e computador, leitor de tela e verificação de carregamento das imagens em produção ainda pendentes.

## Checklist
- [x] Auditar os oito módulos e identificar registros sem mapas.
- [x] Selecionar cinco mapas para uma primeira entrega.
- [x] Conferir autoria, fonte e licença nas páginas de origem.
- [x] Corrigir atribuições de obras derivadas e otimizar duas imagens de maior dimensão.
- [x] Criar catálogo separado, sem alterar os JSON históricos existentes.
- [x] Integrar mapas aos cartões correspondentes.
- [x] Incluir contexto, texto alternativo e créditos.
- [ ] Testar visualmente em Android e computador.
- [ ] Verificar carregamento e acessibilidade com leitor de tela.
- [ ] Avaliar cópia local dos mapas para uso offline.

## Publicação
Implementação em branch e PR de revisão. A versão oficial permanece inalterada até aprovação e integração.
