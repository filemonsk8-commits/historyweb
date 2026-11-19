# Melhorias pedagógicas — Etapa 2: linhas do tempo

## Objetivo
Tornar as linhas do tempo mais claras, legíveis e semanticamente estruturadas, preservando os acontecimentos e os dados históricos existentes.

## Implementação
- Reestrutura cada linha do tempo como lista ordenada (`ol`/`li`).
- Apresenta o ano, o título do acontecimento e sua descrição em elementos semânticos.
- Inclui rótulo acessível para a lista.
- Ajusta espaçamento, marcadores e hierarquia tipográfica.
- Inclui refinamentos específicos para telas estreitas.
- Mantém as perguntas orientadoras já publicadas na versão oficial.
- Não altera os oito módulos JSON nem o conteúdo dos 229 acontecimentos.

## Verificações
- Alteração aplicada sobre a versão atual da `main`, já contendo as melhorias da PWA e as perguntas orientadoras.
- A estrutura do HTML foi atualizada para lista ordenada.
- Os estilos da etapa foram adicionados sem duplicar o código das perguntas da etapa anterior.
- Testes visuais em Android, computador e leitor de tela ainda pendentes.

## Checklist
- [x] Aplicar a etapa sobre a versão oficial atual.
- [x] Melhorar a estrutura semântica da linha do tempo.
- [x] Ajustar a leitura em telas estreitas.
- [x] Preservar os dados históricos e as perguntas orientadoras.
- [ ] Testar visualmente em Android e computador.
- [ ] Validar leitura com leitor de tela.

## Publicação
Alteração isolada em branch e PR de revisão. A versão oficial não é alterada até aprovação e integração.
