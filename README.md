# Projeto Bons Fluidos

Este projeto foi desenvolvido usando [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

# Descrição do Sistema Proposto

O Bons Fluidos é um sistema web desenvolvido para gerenciar a arrecadação e distribuição de produtos de higiene menstrual sustentáveis. Seu principal objetivo é garantir que meninas em situação de vulnerabilidade tenham acesso a esses produtos, permitindo que frequentem a escola com dignidade e minimizando o impacto da pobreza menstrual.

O sistema oferece funcionalidades para controle de estoque, registro de doações e distribuição dos produtos. Também permite a geração de relatórios e disponibiliza uma interface para escolas solicitarem os itens necessários.

## Usuários Esperados para o Sistema

Administradores: Gerenciam o estoque, doações e distribuição dos produtos.

Voluntários: Registram doações recebidas e distribuem produtos.


## Problemas que o Sistema Pretende Resolver

Falta de Acesso: Facilitar o acesso a produtos de higiene menstrual para meninas em situação de vulnerabilidade.

Controle de Estoque: Garantir uma gestão eficiente dos produtos, evitando desperdícios e faltas.

Transparência nas Doações: Manter um registro claro e acessível das doações e distribuições.

Conscientização: Promover informações sobre pobreza menstrual e educação.

## Requisitos Funcionais

Registro de Produtos: Adição de novos produtos ao estoque.

Registro de Doações: Permitir o registro das doações recebidas.

Gestão de Estoque: Controle de entrada e saída de produtos, incluindo relatórios.

Geração de Relatórios: Informar sobre doações, estoque e distribuições.

Autenticação: Controle de acesso com diferentes níveis de usuário.

## Tecnologias Utilizadas

Frontend: Angular, HTML, CSS, JavaScript.

Backend: Node.js com Express.js.

Banco de Dados: MySQL.

IDEs: Visual Studio Code (desenvolvimento), Figma (design de interface e protótipos).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
