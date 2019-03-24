## STAGE 1: Build Angular Application ##
FROM node:8 as builder

WORKDIR /consuminghttp

COPY . /consuminghttp

RUN npm install
RUN npm run-script build
## STAGE 2: Run nginx to serve application ##
FROM nginx
COPY --from=builder /consuminghttp/dist/* /usr/share/nginx/html/

EXPOSE 80