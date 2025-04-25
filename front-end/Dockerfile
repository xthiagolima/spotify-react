FROM node:23.11-slim

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]