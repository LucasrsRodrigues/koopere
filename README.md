
# waveqr

Este projeto é uma aplicação que utiliza um backend construído com **Express**, **TypeORM** e **PostgreSQL**, além de um frontend em **React Native** com **Expo**.

## Requisitos

Antes de começar, verifique se você possui os seguintes pré-requisitos:

- Node.js (versão 14 ou superior)
- npm ou yarn
- PostgreSQL instalado e em execução
- Expo CLI (se não estiver instalado, use `npm install -g expo-cli`)

## Estrutura do Projeto

```
/waveqr
|-- /backend     # Código do backend
|-- /frontend    # Código do frontend
```

## Backend

### Configuração do Banco de Dados

1. **Crie um banco de dados** no PostgreSQL. Você pode usar um comando SQL como:

   ```sql
   CREATE DATABASE meu_banco_de_dados;
   ```

2. **Configure as credenciais** do banco de dados no arquivo de configuração do TypeORM, que geralmente está localizado em `backend/src/data-source.ts`. Exemplo de configuração:

   ```typescript
   import { DataSource } from "typeorm";

   export const AppDataSource = new DataSource({
     type: "postgres",
     host: "localhost",
     port: 5432,
     username: "seu_usuario",
     password: "sua_senha",
     database: "meu_banco_de_dados",
     entities: ["src/entities/*.ts"],
     synchronize: true,
   });
   ```

### Rodando o Backend

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute a aplicação:

   ```bash
   npm run start
   ```

O backend deve estar em execução na porta padrão (geralmente `3000`).

## Frontend

### Configuração do Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Rodando o Frontend

Para iniciar o aplicativo React Native com Expo, execute:

```bash
npx expo start
```

Isso abrirá o Expo Developer Tools em seu navegador. A partir daí, você pode executar o aplicativo em um dispositivo físico ou em um emulador.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um *issue* ou *pull request*.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
