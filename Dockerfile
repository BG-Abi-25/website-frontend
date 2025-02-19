### STAGE 1: Build ###
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/build/browser /usr/share/nginx/html