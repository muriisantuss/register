### Visão Geral

Este é um Sistema Simples de Gerenciamento de Produtos construído usando Angular para o frontend e Node.js com Express para o backend. Ele permite que os usuários realizem operações CRUD (Criar, Ler, Atualizar, Excluir) em produtos.

### Funcionalidades

1. **Formulário de Registro de Produto**: Os usuários podem registrar novos produtos fornecendo seu nome, descrição, preço e quantidade.
2. **Listagem de Produtos**: Exibe uma tabela de todos os produtos registrados, mostrando seu ID, nome, descrição, preço, quantidade e opções para editar ou remover cada produto.
3. **Editar Produto**: Os usuários podem editar produtos existentes clicando no botão "Editar" na linha do produto. Os detalhes do produto serão preenchidos no formulário de registro, permitindo modificações.
4. **Remover Produto**: Permite que os usuários excluam um produto clicando no botão "Remover" na linha do produto.
5. **Design Responsivo**: O aplicativo é projetado para ser responsivo e é construído usando Bootstrap para estilos.

### Requisitos de Software

1. **Node.js**: O ambiente de tempo de execução JavaScript Node.js deve estar instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

2. **Angular CLI**: O Angular CLI (Command Line Interface) é necessário para desenvolver e executar o frontend do projeto. Você pode instalar o Angular CLI globalmente usando o npm (Node Package Manager) com o seguinte comando:
   ```bash
   npm install -g @angular/cli
   ```
   
3. **Instalar o JSON Server globalmente**: Você pode instalar o [JSON Server](https://www.npmjs.com/package/json-server) globalmente usando o npm (Node Package Manager) com o seguinte comando:
   ```bash
   npm install -g json-server@0.17.4 
   ```

### Configuração do Projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

1. **Clonar o Repositório**: 
   ```bash
   git clone https://github.com/muriisantuss/register.git
   ```

2. **Instalar Dependências**:
   - Navegue até o diretório "register" e instale as dependências do Angular:
     ```bash
     cd register
     npm install
     ```
   - Instale as dependências do JSON server **(Opcional)**:
     ```bash
     npx json-server db.json
     ```

3. **Iniciar o Servidor Json Server (BackEnd)**:
   - Execute o seguinte comando no diretório "register":
     ```bash
     json-server db.json
     ```

4. **Iniciar o Servidor do Angular**:
   - Execute o seguinte comando no diretório "register":
     ```bash
     ng serve -o
     ```
Isso abrirá automaticamente o seu navegador padrão e carregará o  website. Qualquer alteração que você fizer nos arquivos do projeto será automaticamente recarregada no navegador.

### Configuração

- **URL da API**: Se o servidor backend estiver em uma porta ou domínio diferente, atualize a variável `apiUrl` no arquivo `product.service.ts` localizado no diretório `src/app/service/` do projeto.

### Dependências

- **Frontend**:
  - Angular
  - ReactiveForms Angular
  - Bootstrap

- **Backend**:
  - JSON Server
  - Node.Js

### Contribuições

Contribuições para o projeto são bem-vindas. Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento.

### Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

### Autor

[Murilo Santos](https://github.com/muriisantuss/) - [Gmail](muriisantuss@gmail.com) - [Website](https://github.com/muriisantuss/register/)

### 🎉 Agradecimentos

Agradeço a todas as pessoas que passaram pela minha vida e contribuíram com seu conhecimento e experiências. 🙏 Vocês fizeram toda a diferença em minha jornada. 🌟
