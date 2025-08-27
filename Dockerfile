FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY prisma ./prisma/

COPY . .

COPY .env .

RUN npx prisma generate

RUN npm run build 

EXPOSE 3002

CMD [ "npm", "run", "start:prod" ]