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
