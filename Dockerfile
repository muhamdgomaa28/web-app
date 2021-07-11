
FROM node:14-alpine as build-step
#RUN mkdir -p /wepapp
WORKDIR /wepapp
COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-step /wepapp/dist/angular-starter /usr/share/nginx/html


