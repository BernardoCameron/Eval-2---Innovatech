# Elegimos maven como compilador utilizando una imagen ligera basada en alpine con java 17
FROM maven:3.8.8-eclipse-temurin-17-alpine AS build

# Seleccionamos /app como nuestro directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo pom.xml para poder descargar las dependencias declaradas en el proyecto
COPY pom.xml .

# Ejecutamos este comando para descargar las dependencias y dejarlas guardadas en caché
RUN mvn dependency:go-offline

# Copiamos la carpeta src que contiene todo el código fuente de nuestra aplicación
COPY src ./src

# Compilamos el proyecto para generar el archivo .jar ejecutable, saltándonos las pruebas unitarias para agilizar
RUN mvn clean package -DskipTests

# Segunda etapa: Elegimos una imagen de ejecución liviana que solo tenga el entorno de Java (JRE)
FROM eclipse-temurin:17-jre-alpine

# Definimos el directorio de trabajo donde correrá la aplicación
WORKDIR /app

# Por seguridad y buenas prácticas, creamos un grupo y un usuario que no sea root para ejecutar el jar
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Cambiamos al usuario que acabamos de crear para que la app no corra con permisos de administrador
USER appuser

# Traemos el archivo .jar compilado en la etapa anterior y lo renombramos a app.jar
COPY --from=build /app/target/*.jar app.jar

# Indicamos el puerto de escucha del microservicio de ventas
EXPOSE 8080

# Comando para arrancar el jar de springboot con la máquina virtual de java
ENTRYPOINT ["java", "-jar", "app.jar"]
