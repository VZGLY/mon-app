FROM nginx:alpine3.22

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 80