# Pokédex

## Estrutura do código

```text
Pokedex/
|----- src/
|      |----- components/
|      |      |----- Header.jsx          → Cabeçalho e navegação
|      |      |----- SearchBar.jsx       → Campo de busca
|      |      |----- Filters.jsx         → Filtro por tipo
|      |      |----- PokemonList.jsx     → Lista de Pokémon
|      |      |----- PokemonCard.jsx     → Card de cada Pokémon
|      |      |----- PokemonCard.css     → Estilo dos cards
|      |      |----- PokemonDetails.jsx  → Modal de detalhes
|      |      |----- TrainerList.jsx     → Lista de treinadores e equipes
|      |      |----- StatBar.jsx         → Estatísticas dos Pokémon
|      |----- data/
|      |      |----- pokedex-data.json   → Dados dos Pokémon, tipos e treinadores
|      |----- App.jsx                   → Junta os componentes e controla as telas
|      |----- main.jsx                  → Inicia o React
|      |----- index.css                 → Estilos gerais
|----- index.html                      → Página principal
|----- package.json                    → Dependências e comandos
|----- vite.config.js                  → Configuração do Vite
|----- eslint.config.js                → Configuração da análise do código
|----- README.md                       → Informações do projeto
```

## Como iniciar

Com o Node.js instalado, abra o terminal na pasta do projeto que contém o arquivo `package.json` e execute:

```sh
npm install
npm run dev
```

Abra no navegador o endereço que aparecer no terminal.

## Funcionalidades

- Exibir os 151 Pokémon da primeira geração em cards.
- Pesquisar Pokémon pelo nome ou número.
- Filtrar Pokémon por tipo.
- Clicar em um Pokémon para ver seu nome, número, tipos e seis estatísticas.
- Fechar os detalhes pelo botão ×, pela tecla Escape ou clicando fora.
- Ver os treinadores, suas insígnias e seus Pokémon.
- Clicar em um Pokémon da equipe de um treinador para abrir seus detalhes.
- Adaptar a disposição dos cards ao tamanho da tela.
