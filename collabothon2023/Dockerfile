FROM node:18.18.2-alpine3.18 AS development
ENV NODE_ENV development
WORKDIR /react-app
COPY ./package.json /react-app
RUN npm install
COPY . .
CMD npm start
