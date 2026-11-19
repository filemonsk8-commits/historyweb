# Melhorias técnicas — Etapa 6: mapas consultados offline

## Objetivo
Permitir que mapas históricos já visualizados continuem disponíveis quando o dispositivo ficar sem conexão, sem tentar baixar todo o acervo de uma só vez.

## Implementação
- Atualiza o cache principal do PWA para `historyweb-pwa-v5`.
- Inclui `mapas-historicos.json` na lista de recursos essenciais pré-armazenados.
- Cria cache separado e persistente `historyweb-maps-v1` para imagens do Wikimedia Commons.
- Armazena a imagem quando ela é solicitada pela primeira vez.
- Em novas consultas, tenta usar primeiro a imagem armazenada.
- Limita o cache de mapas a 20 imagens, removendo as mais antigas quando necessário.
- Mantém o cache separado durante atualizações futuras do cache principal.
- Mantém o comportamento atual de navegação online/offline e cache dos arquivos do próprio site.

## Escopo e limites
- O primeiro acesso a cada imagem ainda exige internet.
- Imagens ainda não consultadas não estarão disponíveis offline.
- O cache de imagens é limitado a 20 itens para controlar o uso de armazenamento.
- O cache não garante permanência se o navegador ou sistema operacional limpar dados temporários.
- A estratégia é restrita a URLs de imagens do Wikimedia Commons no caminho `/wiki/Special:FilePath/`; não intercepta outros domínios.

## Validação estática
- Conferir sintaxe do service worker.
- Confirmar presença do catálogo no pré-cache.
- Confirmar estratégia de cache de imagens e limite de 20 itens.
- Confirmar que o cache de mapas não é removido na ativação de nova versão.

## Testes reais pendentes
- Abrir mapas com internet e depois ativar modo avião.
- Confirmar que mapas já vistos continuam aparecendo.
- Confirmar que mapas ainda não vistos exibem falha offline sem comprometer o restante do aplicativo.
- Testar atualização da PWA e preservação do cache de mapas no Android e no computador.


## Correção complementar — preparação explícita dos mapas offline

Após o teste prático indicar que os mapas não permaneceram disponíveis sem conexão, a estratégia passiva de cache foi reforçada:
- A experiência anterior dependia de cada imagem ter sido realmente requisitada; como as imagens usam carregamento tardio (`loading="lazy"`), isso não garantia que todo o catálogo estivesse armazenado.
- Foi incluído o botão **Baixar mapas para consultar offline**, que percorre os 13 registros do catálogo e solicita cada imagem enquanto há conexão.
- A interface apresenta progresso, quantidade baixada e falhas, com opção de tentar novamente.
- As imagens são armazenadas no cache dedicado `historyweb-maps-v2`; o cache antigo `historyweb-maps-v1` deixa de ser usado após a ativação da atualização.
- O service worker prioriza a cópia armazenada e trata falhas ao gravar o cache sem bloquear o carregamento online da imagem.
- O cache principal da PWA foi atualizado para `historyweb-pwa-v9`.

## Validação da correção

- Catálogo contém 13 imagens em URLs do domínio autorizado do Wikimedia Commons.
- A função de preparação utiliza `fetch` em modo `no-cors` e `Cache.put` para armazenar respostas opacas quando o servidor não expõe os cabeçalhos CORS.
- Sintaxe do JavaScript da página e do service worker conferida.
- Teste de modo avião em Android e computador ainda necessário; a validação estática não substitui o teste no dispositivo.

## Como testar

1. Abra o HistoryWeb conectado à internet.
2. Clique em **Baixar mapas para consultar offline** e aguarde a confirmação de que os 13 mapas foram preparados.
3. Ative o modo avião.
4. Abra os eventos que contêm mapas e confirme que as imagens aparecem.
5. Repita o teste no aplicativo instalado e no navegador do computador.
