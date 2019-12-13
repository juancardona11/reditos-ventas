FROM node:10-alpine

ENV DB_URL mongodb:ventasdb
ENV PORT 3001

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "node", "server.js" ]
