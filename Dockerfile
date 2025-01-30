### STAGE 1: Build ###
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

RUN echo "Contents of /usr/src/app/dist/website-frontend:" && ls -la /usr/src/app/dist/website-frontend

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
# Debug: List the contents of the Nginx configuration directory
RUN echo "Contents of /etc/nginx:" && ls -la /etc/nginx/
COPY --from=build /usr/src/app/dist/website-frontend /usr/src/nginx/html
# Debug: List the contents of the Nginx root directory
RUN echo "Contents of /usr/share/nginx/html:" && ls -la /usr/share/nginx/html
