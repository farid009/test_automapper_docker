FROM node:lts As development

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --production=false

COPY . .

RUN yarn build

FROM node:lts as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 8090

CMD ["yarn", "start:prod"]