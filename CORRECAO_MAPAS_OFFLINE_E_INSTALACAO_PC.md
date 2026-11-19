# Correção — mapas offline e instalação no computador

## Problemas relatados
- Mapas históricos não continuaram disponíveis offline no teste do usuário.
- HistoryWeb não concluiu a instalação como aplicativo no computador.

## Mapas offline
- Acrescentado um controle visível **Baixar mapas para consultar offline** na página principal.
- O controle baixa as 13 imagens do catálogo de mapas, com progresso, contagem de sucessos e aviso de falhas.
- Os downloads são guardados no cache dedicado `historyweb-maps-v2`.
- O service worker consulta o cache antes de tentar a rede.
- Falhas ao gravar no cache não interrompem a exibição online das imagens.
- Cache anterior `historyweb-maps-v1` substituído pelo novo cache; catálogo continua no cache principal.
- O professor precisa preparar os mapas enquanto houver conexão; mapas externos não consultados ou não baixados não são prometidos como disponíveis offline.

## Instalação no computador
- Manifesto atualizado com ícones PNG reais de 192×192 e 512×512, mantendo os SVG como alternativas vetoriais.
- Ícones PNG também incluídos nos recursos pré-cacheados pelo service worker.
- Mantidos `id`, `start_url`, `scope` e `display: standalone` existentes.
- Acrescentado botão de instalação que utiliza o evento nativo `beforeinstallprompt`, quando oferecido pelo navegador.
- Acrescentado retorno de estado para solicitação aceita e evento `appinstalled`.
- Quando o navegador não oferece o evento, há orientação para procurar a opção de instalação no menu.

## PWA e preservação
- Cache principal atualizado de `historyweb-pwa-v8` para `historyweb-pwa-v9`.
- Cache de mapas atualizado para `historyweb-maps-v2`.
- Os oito módulos JSON históricos não foram alterados.
- Os mapas continuam hospedados no Wikimedia Commons; o recurso de preparação copia as imagens para o armazenamento local do navegador/aplicativo.

## Validação estática realizada
- Manifesto JSON analisado.
- PNGs 192×192 e 512×512 adicionados ao repositório e listados no manifesto.
- Lista de recursos do service worker contém os dois PNGs.
- Sintaxe do JavaScript inline e do service worker analisada sem erros.
- Catálogo com 13 mapas conferido; todos os endereços de imagem seguem a allowlist do Commons.
- Comparação com `main`: branch à frente, sem commits atrasados; arquivos históricos JSON preservados.

## Testes reais pendentes
- Preparar os 13 mapas em Android e computador e ativar modo avião.
- Conferir imagens abertas antes e depois da preparação.
- Confirmar instalação no Chrome/Edge para computador, incluindo abertura em janela própria.
- Conferir atualização da PWA já instalada e acesso offline.
- Confirmar uso de teclado e leitor de tela.
