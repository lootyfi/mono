FROM node:alpine

WORKDIR /app

COPY . .

COPY ./package.json .

RUN npm i -g pnpm

RUN pnpm install

EXPOSE 3000

CMD ["nx","serve","api"]