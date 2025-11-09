# Projeto CRUD (NestJS + Angular)
Este repositório contém o código-fonte para uma aplicação full-stack, com o backend desenvolvido em NestJS e o frontend em Angular.

## Visão Geral
O projeto está estruturado em duas pastas principais:

`/backend`: Contém a API RESTful, gerenciamento de banco de dados com TypeORM e lógica de negócios.

`/frontend`: Contém a aplicação de usuário (SPA) construída com Angular.

## Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

Node.js (versão 18 ou superior é recomendada)

Git

MySQL Community Server: Um servidor de banco de dados MySQL.

## Guia de Instalação (MySQL no Windows)

Esta é a forma recomendada para configurar o banco de dados no Windows, usando o instalador oficial.

**1. Baixe o MySQL Installer**
   - Vá para a página oficial: [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/).
   - Baixe o "MySQL Installer for Windows" (o instalador web ou offline).

**2. Execute o Instalador**
   - Abra o instalador e clique em Add para escolher os programas a serem instalados.
   - Escolha a versão 8.0.44 do `MySQL Server - X64` e a versão 8.0.44 do `MySQL Workbench` (em Applications):
      * **MySQL Server 8.0.44 - X64**
      * **MySQL Workbench 8.0.44** (ferramenta visual para gerenciar o banco)

**3. Configuração do Servidor**
   - Durante a instalação, o instalador irá pedir para configurar o servidor.
   - **Autenticação:** Na etapa de "Accounts and Roles", defina uma senha para o usuário `root`. Esta senha será usada no arquivo `.env` para configuração do `backend`.
   - **Serviço do Windows:** Na etapa "Windows Service", mantenha as configurações padrão. Isso irá configurar o MySQL Server para rodar automaticamente como um serviço em segundo plano sempre que você ligar o computador.

**4. Verifique a Conexão com o Workbench**
   - Após a instalação, abra o **MySQL Workbench**.
   - Na tela inicial, você verá uma conexão (geralmente "Local instance 3306").
   - Clique nela e digite a senha do `root` que você acabou de definir.
   - Se a conexão for bem-sucedida, você está pronto para prosseguir com a configuração do backend.

## 1. Configuração do Backend
Siga estes passos primeiro para deixar o servidor pronto para receber conexões.

**1. Clone o repositório**

```
git clone https://github.com/Rangek78/Zoppy_CRUD.git
cd Zoppy_CRUD/backend
```

**2. Instale as dependências**

```
npm install
```
**3. Configure as Variáveis de Ambiente**

Crie uma cópia do arquivo .env.example e renomeie para .env.

Abra o novo arquivo .env e configure suas credenciais do MySQL, principalmente a DB_PASSWORD.

**4. Crie o Banco de Dados**

Abra seu cliente MySQL (MySQL Workbench, DBeaver, etc.) e adicione uma nova conexão em MySQL connections.

Clique em `Test Connection` para garantir que o servidor está sendo executado.

Depois, abra a conexão e execute o seguinte comando SQL para criar o banco de dados que a aplicação usará:

```
CREATE DATABASE IF NOT EXISTS CRUD_db;
```
**5. Execute as Migrações (Migrations)**

Este comando irá ler a pasta src/migrations e criar todas as tabelas necessárias no seu banco de dados.

```
npm run migration:run
```
**6. Inicie o Servidor Backend**

```
npm run start:dev
```
O servidor agora estará rodando em http://localhost:8080. Mantenha este terminal aberto.

## 2. Configuração do Frontend
Em um novo terminal, siga estes passos para iniciar a aplicação frontend.

**1. Navegue até a pasta do frontend**

```
# A partir da pasta raiz do projeto
cd frontend
```
**2. Instale as dependências**

```
npm install
```
**3. Inicie a Aplicação Frontend**

```
ng serve -o
```
ou

```
npm run start
```
Isto irá compilar a aplicação e abri-la automaticamente no seu navegador em http://localhost:4200.

#Scripts Úteis (Backend)
```
# Inicia o servidor em modo de desenvolvimento com "watch mode".
npm run start:dev

# Executa quaisquer migrações pendentes que ainda não foram aplicadas ao banco de dados.
npm run migration:run

# Cria um novo arquivo de migração baseado nas mudanças que você fez nos seus arquivos .entity.ts.
npm run migration:generate -- src/migrations/NomeDaSuaMudanca
```
