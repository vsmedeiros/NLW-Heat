<h1 align="center">NLW Heat - Node.js</h1>


## Tecnologias:

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

## Executar:

> Obs.: Nesse projeto temos autenticação via OAuth com o GitHub

- Clone o repositório e acesse a pasta;
- Crie um `.env`  com as suas credenciais do GitHub;
  - GITHUB_CLIENT_SECRET=
  - GITHUB_CLIENT_ID=
  - JWT_SECRET=
- Instale as dependências com `yarn`:
  - yarn add typescript
  - yarn add express
  - yarn add prisma
  - yarn add jsonwebtoken
  - yarn add socket.io
- Execute as migrations com `yarn prisma migrate dev`;
- Inicie o servidor com `yarn dev`;

A aplicação pode ser acessada pelo navegador em [`localhost:4000`](http://localhost:4000).

