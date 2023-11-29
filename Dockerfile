FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g rollup

COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

