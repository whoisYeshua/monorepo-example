# Stage 1 - the build process

# The as build-deps part allows us to name this part of the build process. That name can then be referred to when configuring the production environment later.
FROM node:16.17-alpine as build

ARG MODULE=main

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .

COPY apps/main/package.json ./apps/main/package.json
COPY apps/widget/package.json ./apps/widget/package.json
COPY packages/eslint-config/package.json ./packages/eslint-config/package.json
COPY packages/helpers/package.json ./packages/helpers/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/ui/package.json ./packages/ui/package.json

# Install deps from package-lock.json
RUN npm ci

COPY . .

# Build app
RUN npm run build:${MODULE}

# Bundle static assets with nginx stage
FROM nginx:1.22-alpine AS static

ARG MODULE=main

# Copy built assets from builder
COPY --from=build /app/apps/${MODULE}/dist /usr/share/nginx/html

# Add our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]