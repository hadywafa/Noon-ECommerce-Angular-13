#first stage pf building the image
FROM node:alpine3.14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build --prod

#second stage of building the image
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html