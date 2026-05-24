# Etapa 1: Compilación del proyecto
FROM maven:3.8.8-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución de la aplicación
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Crear grupo y usuario no privilegiado para seguridad
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
