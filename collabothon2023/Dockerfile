FROM node:lts-alpine as builder
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN mkdir /app-ui
RUN mv ./node_modules ./app-ui
WORKDIR /app-ui
COPY . .
RUN npm run build
