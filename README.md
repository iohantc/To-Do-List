# To-Do-List com React e Vite 📋

## Descrição

Este projeto é uma aplicação de lista de tarefas desenvolvida com [React](https://reactjs.org/) e [Vite](https://vitejs.dev/), criada para ajudar os usuários a gerenciar suas tarefas diárias de maneira eficiente. A aplicação permite adicionar, editar e marcar tarefas como concluídas. Além disso, oferece funcionalidades de filtragem e busca para facilitar a localização de tarefas específicas. Ao adicionar tarefas, é possível definir um título e uma data limite. As tarefas registram a data em que foram concluídas e, caso estejam atrasadas, indicam o número de dias de atraso. É possível editar os cards após criá-los e filtrar as atividades pelo nome, facilitando a utilização da aplicação.

## Recursos

- Adição, edição e marcação de tarefas como concluídas com um simples clique.
- Filtragem e busca por nome de tarefa.
- Indicação visual de tarefas a concluir, concluídas e atrasadas através de cores diferenciadas:
  - ![#FFEBCC](https://via.placeholder.com/15/FFEBCC/000000?text=+) `#FFEBCC` Para tarefa a concluir
  - ![#CCFFD5](https://via.placeholder.com/15/CCFFD5/000000?text=+) `#CCFFD5` Para Tarefa concluída
  - ![#FFCCCC](https://via.placeholder.com/15/FFCCCC/000000?text=+) `#FFCCCC` Para tarefa atrasada

## Instalação e Execução

1. Clone o repositório: 
    ```bash
    git clone https://github.com/iohantc/To-Do-List.git
    ```
2. Entre na pasta do projeto: 
    ```bash
    cd To-Do-List
    ```
3. Instale as dependências: 
    ```bash
    npm install
    ```
4. Execute o programa: 
    ```bash
    npm run dev
    ```

Siga as instruções na interface do usuário para adicionar, editar ou marcar tarefas como concluídas.

## Estrutura do Projeto

```plaintext
📦 To-Do-List
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AdicionarTarefaPg.jsx
 ┃ ┃ ┣ 📜 EditarTarefa.jsx
 ┃ ┃ ┣ 📜 ListaTarefas.jsx
 ┃ ┃ ┣ 📜 PesquisaFiltro.jsx
 ┃ ┃ ┣ 📜 Tarefa.jsx
 ┃ ┃ ┣ 📜 TarefasConcluidasPg.jsx
 ┃ ┃ ┗ 📜 VisualizarTarefasPg.jsx
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 AdicionarTarefaPg.css
 ┃ ┃ ┣ 📜 Animacoes.css
 ┃ ┃ ┣ 📜 App.css
 ┃ ┃ ┣ 📜 ListaTarefas.css
 ┃ ┃ ┣ 📜 NavBar.css
 ┃ ┃ ┣ 📜 PesquisaFiltro.css
 ┃ ┃ ┣ 📜 Tarefa.css
 ┃ ┃ ┣ 📜 TarefasConcluidasPg.css
 ┃ ┃ ┗ 📜 VisualizarTarefasPg.css
 ┃ ┣ 📜 App.jsx
 ┃ ┗ 📜 main.jsx
 ┣ 📜 .gitignore
 ┣ 📜 index.html
 ┣ 📂 node_modules
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 vite.config.js
```

## Tecnologias Utilizadas

- **React**: Utilizado para construir a interface do usuário.
- **Vite**: Oferece um ambiente de desenvolvimento mais rápido e eficiente.
- **Node.js**: Necessário para o gerenciamento de pacotes e execução do projeto.
- **React-Router-Dom**: Utilizado para gerenciar as rotas na aplicação.

## Gerenciamento de Estado

O gerenciamento do estado da aplicação é feito através de hooks, que são utilizados para armazenar e atualizar as tarefas do aplicativo.

## Contribuição

Contribuições são muito bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/iohantc/To-Do-List/issues) ou fazer um [pull request](https://github.com/iohantc/To-Do-List/pulls).

## Contato e Suporte

Para relatar bugs ou solicitar novos recursos, use a seção [Issues](https://github.com/iohantc/To-Do-List/issues) do GitHub.

## Considerações Finais

Este projeto foi desenvolvido com o intuito de demonstrar as habilidades em React e Vite, seguindo as melhores práticas de organização de código e estrutura de projeto. A escolha por essa estrutura facilita a manutenção e compreensão do projeto, proporcionando uma base sólida para futuras expansões e melhorias.
