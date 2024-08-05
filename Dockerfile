# Use uma imagem base do Node.js
FROM node:alpine

# Crie um diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Defina o comando para rodar a aplicação
CMD ["npm", "start"]
