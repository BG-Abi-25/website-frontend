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
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/website-frontend /usr/share/nginx/html
# Debug: List the contents of the Nginx root directory
RUN echo "Contents of /usr/share/nginx/html:" && ls -la /usr/share/nginx/html
