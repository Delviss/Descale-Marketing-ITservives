# ---------- build ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (leverage layer caching)
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

# Build the static site
COPY . .
RUN npm run build

# ---------- runtime ----------
FROM nginx:1.27-alpine AS runtime

# Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
