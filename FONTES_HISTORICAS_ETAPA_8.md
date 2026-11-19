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
