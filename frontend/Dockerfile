FROM node:14.13.1-alpine3.12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "start"]