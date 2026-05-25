# Elegimos node versión 20 basado en alpine para hacer la compilación de la app React
FROM node:20-alpine AS build

# Definimos /app como el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json para gestionar las dependencias de node
COPY package*.json ./

# Instalamos los paquetes de node definidos en el archivo package.json
RUN npm install

# Copiamos todo el código fuente del proyecto frontend al contenedor
COPY . .

# Compilamos el proyecto React con Vite para generar los archivos estáticos listos para producción
RUN npm run build

# Segunda etapa: Usamos nginx para servir los archivos estáticos que acabamos de compilar
FROM nginx:1.25-alpine

# Copiamos la carpeta dist con todos los archivos estáticos compilados a la ruta por defecto de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra plantilla de configuración de nginx al directorio de plantillas para inyectar las IPs del backend
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Exponemos el puerto 80 que es por donde se conectará el usuario a la web
EXPOSE 80

# Comando para levantar nginx en primer plano para que el contenedor no se apague y siga corriendo
CMD ["nginx", "-g", "daemon off;"]
