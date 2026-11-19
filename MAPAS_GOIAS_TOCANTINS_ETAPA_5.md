# Melhorias pedagógicas — Etapa 5: mapas históricos de Goiás e Tocantins

## Objetivo
Ampliar o catálogo de mapas históricos com cartografia relacionada à formação territorial e à ocupação colonial de Goiás, além de oferecer uma referência visual para compreender a configuração territorial goiana anterior à criação do Tocantins.

## Mapas incluídos
1. **Limites da Capitania de Goiás (1751)** — reconstrução cartográfica moderna baseada em mapa atribuído a Francesco Tosi Colombina. Licença CC BY-SA 4.0.
2. **Distribuição espacial das sesmarias (1739–1770)** — pesquisa cartográfica sobre concessões de terras, sedes administrativas, rios e caminhos. Licença CC BY 4.0.
3. **Estado de Goiás em 1974** — mapa de pesquisa baseado em dados cartográficos do IBGE de 1970, útil para comparar a configuração territorial anterior à criação do Tocantins. Licença CC BY 4.0.

## Integração
- Os dois mapas coloniais foram associados ao registro existente sobre mineração e revoltas coloniais.
- O mapa de 1974 foi associado ao registro existente sobre a ditadura civil-militar.
- O catálogo foi ampliado de 10 para 13 mapas.
- Os oito módulos históricos JSON não foram modificados.
- Cada entrada contém contexto, texto alternativo, fonte, autoria e licença.

## Limites e cautelas
- O mapa de 1751 é uma reconstrução moderna, não uma digitalização apresentada como original setecentista.
- A distribuição de sesmarias não equivale à ocupação integral do território e não apaga as territorialidades indígenas.
- O mapa de 1974 representa o estado antes da criação do Tocantins; não documenta sozinho a decisão constitucional de 1988.
- Não foi incluído um mapa específico da transferência da capital para Goiânia: a base atual não possui um registro histórico próprio para esse acontecimento. Evitou-se associar um mapa a um evento inadequado ou alterar o conteúdo histórico nesta etapa.

## Validação estática
- JSON válido.
- 13 mapas no catálogo.
- IDs únicos.
- Todos os mapas novos têm evento_id existente nos módulos históricos.
- Campos de contexto, texto alternativo, fonte, autoria e licença preenchidos.
- Módulos históricos preservados.

## Testes ainda necessários
- Conferir carregamento visual das imagens em Android e computador.
- Testar acessibilidade com leitor de tela.
- Verificar comportamento offline das imagens externas.
