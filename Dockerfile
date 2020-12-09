FROM node:12.4-alpine

RUN \
  echo "UPDATING SYSTEM" && \
  apk update && \
  apk add --update

WORKDIR /app

COPY ./app/package.json .

RUN npm install

COPY ./app/ .

EXPOSE 3000

ENTRYPOINT npm start