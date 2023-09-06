FROM node:18-alpine

WORKDIR /app

COPY ./package.json ./

ENV NPM_CONFIG_LOGLEVEL verbose

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]