FROM node:24 AS build
WORKDIR /src
COPY . .
RUN npm run build

FROM nginx:alpine3.22
WORKDIR /usr/share/nginx/html
COPY --from=build /src/build .
EXPOSE 80