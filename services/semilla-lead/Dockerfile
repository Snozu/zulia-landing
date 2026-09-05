# Servicio de leads de Semilla — sin dependencias, imagen mínima.
FROM node:20-alpine
WORKDIR /app
COPY server.mjs ./
ENV NODE_ENV=production
ENV PORT=8080
ENV DATA_DIR=/data
EXPOSE 8080
# Healthcheck: Traefik/Docker sabe si el servicio está vivo.
HEALTHCHECK --interval=30s --timeout=4s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/api/lead/health || exit 1
CMD ["node", "server.mjs"]
