FROM node:20-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm test

FROM node:20-slim AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/server.js ./server.js
COPY --from=builder /usr/src/app/src ./src

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
