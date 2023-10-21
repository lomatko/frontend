FROM node:lts-alpine as builder
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm start
