FROM node:20-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM node:20-slim AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]