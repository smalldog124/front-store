FROM node:10-alpine3.9 as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.18-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/front-store /usr/share/nginx/html