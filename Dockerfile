# Stage 1: Build Stage
FROM node:18-alpine as builder
WORKDIR /app

# Pass build arguments for environment variables
ARG VITE_BASE_URL
ARG VITE_BASE

# Set environment variables for the build process
ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_BASE=$VITE_BASE

# Copy only package.json and package-lock.json for npm install
COPY package*.json ./
RUN npm install

# Copy only necessary files for the build
COPY index.html ./
COPY src/ src/
COPY public/ public/
COPY .eslintrc.cjs ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

RUN npm run build

# Stage 2: Production Stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./src/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
