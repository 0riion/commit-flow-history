# Commit Flow History

Show the commit flow history of a git repository, in this case the repository is [commit-flow-history](https://github.com/0riion/commit-flow-history). This project is build with:

- [NextJS](https://nextjs.org/): React framework that makes it easy to build server-rendered and static websites.
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [Monorepo with pnpm workspace](https://pnpm.io/): Fast, disk space efficient package manager.
- [tRPC](https://trpc.io/): End-to-end typesafe APIs made easy, this project use it to communicate between the frontend and the backend.
- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Project Structure

The server and client are in the same repository, the server is in the `apps/server` folder and the client is in the `apps/client` folder. The `libs` folder contains the shared code between the server and the client.

## How to run the project

### Install dependencies

Once you clone the repository, you need to install the dependencies with the following command:

```bash
pnpm i
```

### Run the server

Once you run the following command, the server and the client will be running in different ports.

```bash
pnpm dev
```

### Environment variables

Each project has its own `.env` file, the server has the `.env` file in the root folder and the client has the `.env.local` file in the `apps/client` folder.

You can define the necessary environment variables in each file, you can check the .env.example files to see the necessary environment variables.
