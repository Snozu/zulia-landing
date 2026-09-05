# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Endpoint del formulario de leads (se hornea en el build). Se puede sobrescribir con --build-arg.
ARG PUBLIC_SEMILLA_LEAD_ENDPOINT=https://zulia.lat/api/lead
ENV PUBLIC_SEMILLA_LEAD_ENDPOINT=$PUBLIC_SEMILLA_LEAD_ENDPOINT
# ID de medición de Google Analytics 4 (G-XXXXXXXXXX). También se hornea en el
# build: sin él, el sitio no carga ningún script de analytics.
ARG PUBLIC_GA_ID=
ENV PUBLIC_GA_ID=$PUBLIC_GA_ID
# Token de verificación de Google Search Console.
ARG PUBLIC_GSC_VERIFICATION=
ENV PUBLIC_GSC_VERIFICATION=$PUBLIC_GSC_VERIFICATION
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
