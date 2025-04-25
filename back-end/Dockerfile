FROM node:23.11-slim

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

CMD ["node", "api/server.js"]