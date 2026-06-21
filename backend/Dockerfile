FROM node:20-alpine

WORKDIR /app

COPY package*.jsom ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]