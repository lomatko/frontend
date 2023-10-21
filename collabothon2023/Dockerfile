FROM node:alpine3.18
WORKDIR /app
COPY /collabothon2023/package.json ./
COPY /collabothon2023/package-lock.json ./
RUN npm install
COPY /collabothon2023/. ./
CMD ["npm", "start"]
