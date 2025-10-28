FROM node:20-alpine3.16

ENV MONGO_DB_USERNAME=admin
ENV MONGO_DB_PASSWORD=password

RUN mkdir -p /app

COPY . /app

CMD ["npm","start"]