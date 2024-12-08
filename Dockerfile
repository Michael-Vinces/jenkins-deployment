# Imagen base de Node.js
FROM node:18

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./
COPY server.js ./

# Instalar las dependencias
RUN npm install

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
