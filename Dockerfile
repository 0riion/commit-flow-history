FROM node:19.2-alpine3.16

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY ./ ./

RUN npm install -g pnpm
RUN pnpm install
