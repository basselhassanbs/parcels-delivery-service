FROM node:18.14.2
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i --force
EXPOSE 3000
CMD ["npm", "run", "start"]
