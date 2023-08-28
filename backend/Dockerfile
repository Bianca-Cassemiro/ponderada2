FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

VOLUME [ "/usr/src/app/node_modules" ]

EXPOSE 3333

# Define the command to start the app
CMD ["npm", "run", "dev"]