# Projeto Web II - Backend (Clone Twitter/X)

Este repositório contém o código-fonte do **backend** para um clone do Twitter/X, desenvolvido como projeto N1 da disciplina de Programação Web II.

A aplicação é uma API RESTful construída com Node.js e Express, responsável por toda a lógica de negócio, autenticação e comunicação com o banco de dados.

## 🚀 Funcionalidades Principais (Backend)

  * **Autenticação de Usuários:** Sistema completo de registro (`/register`) e login (`/login`) com sessões.
  * **Gerenciamento de Posts:** Endpoints para criar e listar posts (tweets).
  * **Gerenciamento de Comentários:** Endpoints para criar e listar comentários de um tweet.

## 🛠️ Stack de Tecnologias

Este projeto utiliza um stack moderno de JavaScript no backend:

  * **Runtime:** [Node.js v22](https://nodejs.org/pt)
  * **Framework:** [Express.js](https://expressjs.com/)
  * **Banco de Dados:** [SQL (Azure SQL)](https://azure.microsoft.com/pt-br/products/azure-sql)
  * **ORM:** [Sequelize](https://sequelize.org/) (Para abstração e comunicação com o banco SQL)

## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

**1. Clone o repositório:**

```bash
git clone https://github.com/kkauaon/projeto-webII-node.git
cd projeto-webII-node
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Configure as Variáveis de Ambiente:**

Crie um arquivo `.env` na raiz do projeto. Você precisará preencher com as credenciais do seu banco de dados Azure SQL e um segredo para autenticação.

```env
# Configuração do Banco de Dados para o Sequelize
DB_HOST=seu_servidor.database.windows.net
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_DIALECT=mssql

# Segredo para Autenticação
SESSION_SECRET=seu_segredo_super_secreto
```

**5. Execute a aplicação:**

```bash
node .
```

Após executar, a API estará disponível em `http://localhost:3001`.
