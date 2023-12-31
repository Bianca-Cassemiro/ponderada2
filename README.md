# Atividade Avaliativa 2

# Descrição:
O projeto é um To-do list desenvolvido para ajudar os usuários(Prof Murilo) a organizarem suas tarefas diárias de maneira eficiente. A aplicação foi construída com tecnologias, incluindo Postgres, Next.js, Node.js e Prisma. O principal objetivo era a criação de uma plataforma com autenticação, registro de tasks no backend e containers.

# Recursos Principais:
- Persistência de Dados com Postgres:
O aplicativo utiliza um banco de dados Postgres para armazenar e gerenciar os dados das listas de tarefas dos usuários. Isso permite que as tarefas sejam persistentes e acessíveis em todas as sessões.

- Framework Next.js:
A interface do aplicativo é construída usando Next.js, um framework React que oferece renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR) para otimizar a velocidade de carregamento e melhorar a experiência do usuário.

- Back-End Node.js:
O servidor é construído em Node.js, permitindo um ambiente de execução eficiente e escalável. Ele gerencia as solicitações dos clientes, lida com a lógica de negócios e interage com o banco de dados.

- Prisma ORM:
O Prisma é usado como um Object-Relational Mapping (ORM) para simplificar a interação com o banco de dados Postgres. Isso reduz a complexidade das consultas SQL e torna a manipulação de dados mais intuitiva.

# Imagens no dockerhub
As imagens foram disponibilizadas no seguinte repositório: https://hub.docker.com/repository/docker/bialimac/ponderada2/general

# Como utilizar a aplicação
- Clone o repositório
- Em um terminal rode o seguinte comando:
 ```bash
 docker compose up --build
```
- Em um outro terminal, execute o seguinte comando:
```bash
 npx prisma migrate dev
```
- O frontend estará na porta 3000
- O backend estará na porta 3333
- O banco de dados estará no 5432

- Em um outro terminal, execute o seguinte comando caso queira ver o banco de dados:
```bash
 npx prisma studio
```

# Imagens da aplicação:

<img width="600" alt="Screenshot_1" src="https://github.com/Bianca-Cassemiro/ponderada2/assets/99203402/203425fe-d93b-4af6-9fbc-fd68efc2e935">
<img width="600" alt="Screenshot_2" src="https://github.com/Bianca-Cassemiro/ponderada2/assets/99203402/1bb3f395-908e-497c-9a2f-0c06a63233d5">
<img width="600" src="https://github.com/Bianca-Cassemiro/ponderada2/assets/99203402/f228d849-24b5-4bd3-a167-c59cd62b2408")>

# Teste utilizando JWT - private route

![Imagem do WhatsApp de 2023-08-29 à(s) 21 02 34](https://github.com/Bianca-Cassemiro/ponderada2/assets/99203402/20311d64-27b3-4591-a02b-e9ecc0273901)

# Estrutura de pastas

```Project
├── Backend
│   ├── Dockerfile
│   ├── .gitignore
│   ├── package.json
│   ├── Prisma
│   │   └── migrations
│   └── src
│       ├── server.js
│       └── todos.routes.js
└── Frontend
    ├── src
    │   ├── pages
    │   ├── styles
    │   └── components
    ├── Dockerfile
    └── .gitignore
```

