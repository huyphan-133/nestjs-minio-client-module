FROM node:16-alpine
WORKDIR /home/node
COPY ./package.json .
RUN npm install
COPY . .
CMD npm run start:prod