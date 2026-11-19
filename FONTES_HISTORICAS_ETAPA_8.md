# Etapa 8 — Fontes históricas e documentos

## Objetivo
Criar no HistoryWeb uma área de consulta a acervos institucionais e uma orientação breve para análise crítica de documentos históricos, sem alterar os oito módulos JSON existentes.

## Implementação
- Novo item de navegação: **Fontes Históricas**.
- Catálogo inicial com oito recursos institucionais:
  1. Sistema de Informações do Arquivo Nacional (SIAN).
  2. Guia de acervos do Arquivo Nacional.
  3. Biblioteca Nacional Digital.
  4. Hemeroteca Digital Brasileira.
  5. Arquivo Histórico da Câmara dos Deputados.
  6. Acervos das Assembleias Constituintes.
  7. Arquivo Histórico Estadual de Goiás.
  8. Índice do Arquivo Histórico de Goiás.
- Cada item informa instituição, tipos de fontes, recorte temporal e forma de acesso.
- Busca textual e filtro por categoria.
- Orientação didática em cinco perguntas: identificação, contexto, finalidade/público, perspectiva/limites e comparação.
- Links externos abrem em nova aba com `rel="noopener noreferrer"`.
- Dados textuais inseridos no HTML são escapados antes de serem renderizados.
- Layout responsivo para telas menores.

## Cuidados de precisão
- O catálogo distingue consulta digital de consulta presencial.
- O Arquivo Histórico Estadual de Goiás é descrito como acervo de consulta presencial mediante agendamento; não se afirma que todo o acervo esteja digitalizado.
- A página da Hemeroteca Digital da Biblioteca Nacional informa possível indisponibilidade temporária; o catálogo registra essa ressalva e aponta a BNDigital como alternativa.
- A área apresenta portais de acervo e instrumentos de pesquisa, não atribui documentos específicos a acontecimentos sem comprovação.

## Offline
A funcionalidade está incorporada ao `index.html`, que já integra o conjunto de recursos centrais do aplicativo. O cache principal do service worker foi incrementado de `historyweb-pwa-v5` para `historyweb-pwa-v6`, garantindo que a instalação atualizada recarregue o `index.html` com o novo catálogo. O cache separado de mapas consultados permanece preservado pela regra de ativação existente. Assim, a interface e as descrições do catálogo ficam no próprio arquivo da aplicação; os portais externos e documentos hospedados por terceiros continuam dependendo de conexão.

## Preservação
- Nenhum dos oito módulos históricos JSON foi modificado.
- Nenhum conteúdo anterior foi removido intencionalmente.
- O catálogo é uma nova área de navegação e não interfere nas rotinas de busca e carregamento dos períodos.

## Validações realizadas
- Conferência da estrutura da navegação, função de abertura, filtro e renderização.
- Oito registros de acervos presentes no catálogo.
- Conferência do uso de escape de HTML nos campos renderizados.
- Conferência de links oficiais e respectivos avisos de acesso a partir dos portais institucionais.

## Testes ainda necessários
- Abrir a área no Android e no computador.
- Testar busca por termos como “Goiás”, “jornais”, “Constituição” e “manuscritos”.
- Testar os filtros de categoria e a abertura de links externos.
- Testar a área com o aplicativo em modo offline após atualização da PWA.
- Conferir acessibilidade com leitor de tela.

## Complemento — documentos primários relacionados a temas históricos

O catálogo foi ampliado com oito documentos ou registros oficiais:
1. Constituição Política do Império do Brasil (1824), relacionada ao período imperial.
2. Lei nº 3.353 (Lei Áurea, 1888), relacionada à abolição e ao Império.
3. Constituição republicana de 1891, relacionada à Primeira República.
4. Constituição de 1934, relacionada à Era Vargas.
5. Constituição de 1937, relacionada ao Estado Novo.
6. Decreto estadual nº 1.816 (1937), sobre a transferência da capital para Goiânia.
7. Constituição de 1988, ADCT art. 13, sobre a criação do Tocantins.
8. Constituição Federal de 1988, relacionada à redemocratização e à Nova República.

Cada documento inclui instituição responsável, ano, tipo documental, explicação de contexto, tema histórico relacionado e link para a fonte oficial. A busca textual existente filtra também os documentos. Os registros são apresentados como fontes para análise, não como narrativas neutras ou suficientes por si só.

## Referências institucionais verificadas
- Câmara dos Deputados — textos originais das Constituições de 1824, 1891, 1934 e 1937 e da Lei nº 3.353/1888.
- Casa Civil do Governo de Goiás — relação oficial de leis e decretos relativos à construção e transferência da capital.
- Presidência da República — Constituição de 1988 e ADCT, incluindo o art. 13.

## Validação complementar
- Oito documentos adicionais no catálogo.
- Links de documentos direcionados a portais oficiais.
- Busca integrada aos acervos e documentos.
- Campos textuais dos cartões escapados antes da renderização.
- Os oito módulos JSON históricos permanecem sem alterações.


## Associação aos registros do HistoryWeb
Cada um dos oito documentos adicionais inclui internamente o módulo de referência e o identificador do acontecimento correspondente em `brasil.json`. A verificação confirmou que os oito identificadores existem no módulo e que os 13 registros originais permanecem preservados.


# Etapa 9 — Atividades de interpretação de fontes históricas

## Objetivo pedagógico
Transformar o catálogo de documentos em um espaço de investigação, incentivando os estudantes a formular perguntas, contextualizar evidências, reconhecer perspectivas e construir interpretações fundamentadas.

## Implementação
- Cada um dos oito documentos possui um bloco expansível **Investigar esta fonte — atividade para estudantes**.
- Cada atividade apresenta um desafio específico ao documento e ao processo histórico relacionado.
- Roteiro comum com cinco operações: identificação, contextualização, interpretação, crítica dos limites e confronto com outras evidências.
- Orientação de registro final: conclusão sustentada por pelo menos duas evidências, distinguindo informação documental de inferência do estudante.
- Elementos semânticos `details`, `summary` e lista ordenada, com foco visível para navegação por teclado.
- Estilos integrados ao visual acadêmico e responsivo existente.

## Articulação pedagógica
A proposta dialoga com a habilidade EM13CHS101 do Ensino Médio, que envolve identificar, analisar e comparar fontes e narrativas em diferentes linguagens, e com os procedimentos de investigação histórica descritos na BNCC: identificação, comparação, contextualização, interpretação e análise. A atividade pode ser adaptada a outras etapas de ensino, com mediação e complexidade ajustadas à turma.

## Validação estática complementar
- Oito documentos com desafios específicos.
- Oito identificadores de eventos conferidos em `brasil.json`.
- Cinco perguntas por roteiro.
- Campos dinâmicos escapados antes da renderização.
- Blocos expansíveis e foco visível conferidos.
- Os módulos históricos JSON permanecem sem alterações.

## Testes ainda necessários
- Abrir e responder aos oito roteiros no Android e computador.
- Conferir navegação por teclado e leitor de tela.
- Avaliar clareza e adequação das perguntas com estudantes.
- Testar atualização do aplicativo instalado e funcionamento offline.


# Etapa 10 — Área de apoio ao professor

## Objetivo
Oferecer um roteiro prático para planejar, mediar e avaliar atividades de interpretação de fontes históricas, sem substituir a autonomia docente.

## Recursos incluídos
- Objetivos de aprendizagem para o trabalho com documentos.
- Lista de preparação antes da aula.
- Sugestão flexível de aula de 50 minutos, em cinco momentos.
- Estratégias de mediação, acessibilidade e inclusão.
- Quatro critérios de avaliação: identificação/contexto, leitura crítica, uso de evidências e argumentação.
- Perguntas para síntese e fechamento.
- Seções expansíveis com estrutura semântica, foco visível e apresentação responsiva.

## Orientação pedagógica
Os critérios avaliam o processo de investigação e a qualidade da justificativa, não a reprodução de uma resposta única. As sugestões de adaptação devem respeitar as necessidades da turma e os objetivos curriculares definidos pelo professor.

## Validação estática
- Área do professor presente na página de Fontes Históricas.
- Seis blocos de orientação conferidos.
- Rubrica com quatro dimensões presente.
- Layout responsivo com coluna única em telas estreitas.
- Módulos históricos JSON não alterados.

## Testes pendentes
A aplicação prática, navegação por teclado/leitor de tela e apresentação em Android e computador ainda precisam de teste real.
