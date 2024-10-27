
# WeaveQR

Este projeto é uma aplicação que utiliza um backend construído com **Express**, **TypeORM** e **PostgreSQL**, além de um frontend em **React Native** com **Expo**.

## Requisitos

Antes de começar, verifique se você possui os seguintes pré-requisitos:

- Docker e Docker Compose instalados
- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI (se não estiver instalado, use `npm install -g expo-cli`)

## Estrutura do Projeto

```
/weaveqr
|-- /backend     # Código do backend
|-- /frontend    # Código do frontend
|-- docker-compose.yml # Configuração do Docker
```

## Configuração do Docker

### Docker Compose

O projeto utiliza o Docker Compose para gerenciar os containers do backend e do banco de dados. O arquivo `docker-compose.yml` deve estar na raiz do seu projeto. Exemplo de configuração:

```yaml
version: '3.8'

services:
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: seu_usuario
      POSTGRES_PASSWORD: sua_senha
      POSTGRES_DB: meu_banco_de_dados
    ports:
      - "5432:5432"

  backend:
    build:
      context: ./backend
    depends_on:
      - db
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://seu_usuario:sua_senha@db:5432/meu_banco_de_dados
```

### Rodando o Projeto

1. **Inicie os containers**:

   Na raiz do projeto, execute:

   ```bash
   docker-compose up --build
   ```

   Isso criará e iniciará os containers do banco de dados e do backend. O backend estará disponível na porta `3000`.

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
