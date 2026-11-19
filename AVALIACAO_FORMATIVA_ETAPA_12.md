# Etapa 12 — Avaliação formativa e acompanhamento pedagógico

## Objetivo
Acrescentar à Área do Professor um instrumento prático para registrar observações de aprendizagem, identificar avanços e planejar intervenções pedagógicas, sem criar um sistema de notas automáticas ou comparar estudantes.

## Implementação
- Ficha de acompanhamento formativo integrada à Área do Professor, dentro de **Fontes Históricas**.
- Campos para turma, identificação por código ou iniciais, data e atividade/tema.
- Quatro critérios alinhados à rubrica já existente:
  1. Identificação e contextualização.
  2. Leitura crítica.
  3. Uso de evidências.
  4. Argumentação.
- Escala descritiva por critério: não observado, consolidado, em desenvolvimento e precisa de mediação.
- Campos para evidências observadas/avanços e próximo passo pedagógico/devolutiva.
- Ação para imprimir a ficha ou salvá-la em PDF pelo recurso do navegador.
- Estilos específicos para impressão em A4, além de layout responsivo e foco visível nos controles.

## Privacidade e limites
- A ficha é processada localmente no navegador; não envia dados a servidores nem grava registros no armazenamento do aplicativo.
- O professor deve imprimir ou salvar em PDF antes de sair da página.
- A interface recomenda usar códigos ou iniciais e evitar dados pessoais sensíveis, seguindo as regras de proteção de dados da escola.
- A escala é qualitativa e formativa; não calcula notas nem produz ranking.

## PWA e preservação
- Cache principal atualizado de `historyweb-pwa-v7` para `historyweb-pwa-v8`.
- Cache separado de mapas `historyweb-maps-v1` preservado.
- Os oito módulos históricos JSON não foram alterados.

## Validação estática
- Ficha integrada ao bloco Área do Professor.
- Quatro critérios e quatro níveis descritivos conferidos.
- Campos de evidência e próximo passo presentes.
- Ação de impressão e estilos A4 identificados.
- Aviso sobre privacidade e ausência de armazenamento persistente presente.
- Alterações restritas ao `index.html`, `sw.js` e este relatório.

## Testes pendentes
- Conferir preenchimento e impressão/PDF em computador.
- Conferir visualização e impressão/PDF em Android.
- Testar a atualização da PWA e o acesso offline.
- Verificar navegação por teclado e leitor de tela.
- Avaliar a clareza da ficha na prática pedagógica.
