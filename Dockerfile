FROM node:15

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "next", "dev"]

# for /F %i in ('docker images -a -q') do docker rmi -f %i
# docker system prune -a --volumes

