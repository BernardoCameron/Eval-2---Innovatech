# Etapa 1: Compilación del proyecto React con Vite
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir el contenido estático usando Nginx
FROM nginx:1.25-alpine

# Copiar los archivos estáticos compilados desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar el template de Nginx para sustitución de variables de entorno al iniciar
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Exponer el puerto 80
EXPOSE 80

# El comando por defecto de la imagen de Nginx inicializará el script que
# lee de /etc/nginx/templates/ y procesa la sustitución de variables.
CMD ["nginx", "-g", "daemon off;"]
