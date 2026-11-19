# PWA — instalação e funcionamento offline (Etapa 43)

Data: 19/11/2026  
Base: `modernizacao/auditoria-testes-integrados-etapa-42`

## Implementações

- Manifesto ampliado com identificador, nome, descrição, idioma, escopo e URL inicial relativos ao diretório do projeto. Isso mantém a compatibilidade com publicação em subdiretório, como GitHub Pages.
- Criado `icons/icon.svg`, ícone acadêmico com livro aberto e paleta azul-marinho/dourado.
- Criado `icons/icon-maskable.svg`, versão com área segura para recorte em lançadores compatíveis.
- Adicionados os ícones e a cor de tema ao cabeçalho de `index.html`.
- Service Worker atualizado para cache `historyweb-pwa-v2`.
- Cache de instalação inclui página, manifesto, fundo, ícones e os oito módulos JSON.
- Ativação remove o cache legado `historico-pwa-v1` e versões anteriores com prefixo `historyweb-pwa-`.
- Requisições externas e métodos diferentes de GET não são interceptados.
- Navegações usam a cópia local de `index.html` como alternativa quando a rede falha.

## Verificações estáticas realizadas

- [x] Manifesto parseado como JSON.
- [x] Duas declarações de ícone presentes e caminhos conferidos.
- [x] Ícones SVG presentes no repositório e incluídos no cache.
- [x] URL inicial e escopo relativos (`./index.html` e `./`).
- [x] Cabeçalho HTML aponta para o manifesto e para o ícone.
- [x] Cor de tema definida.
- [x] Nome do cache atualizado.
- [x] Rotina de remoção de caches antigos presente.
- [x] Restrição de interceptação a GET e à mesma origem.
- [x] Alternativa offline para navegação presente.

## Limites conhecidos

Esta etapa não foi executada em navegador ou dispositivo real. A sintaxe e a configuração foram conferidas estaticamente, mas ainda é necessário testar a instalação, a atualização do Service Worker, o comportamento offline e a apresentação do ícone em Android, desktop e navegadores compatíveis.

Os ícones foram criados em SVG vetorial. O suporte a SVG como ícone de instalação varia entre plataformas e navegadores; para compatibilidade mais ampla, especialmente em alguns fluxos do iOS, ainda pode ser útil adicionar versões PNG nos tamanhos recomendados e testar o comportamento específico da plataforma.

O cache é atualizado por versão. Conteúdo já instalado poderá continuar na versão anterior até que o navegador processe a nova instalação/ativação do Service Worker.

## Checklist geral atualizado

- [x] Manifesto PWA ampliado.
- [x] Ícone principal criado.
- [x] Ícone maskable criado.
- [x] Ícones integrados ao cabeçalho e ao cache.
- [x] Atualização de cache versionada.
- [x] Limpeza de cache legado.
- [x] Fallback de navegação offline.
- [ ] Teste real de instalação no Android.
- [ ] Teste real de instalação no computador.
- [ ] Teste real com modo avião após primeira visita.
- [ ] Teste de atualização do Service Worker entre versões.
- [ ] Avaliar PNGs e ícone Apple Touch para compatibilidade ampliada.

## Preservação

Nenhum módulo JSON, registro histórico ou recurso principal foi removido. A alteração se limita ao manifesto, Service Worker, cabeçalho do HTML, dois novos ícones SVG e este relatório. A branch `main` não foi modificada.
