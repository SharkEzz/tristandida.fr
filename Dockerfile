FROM node:16-alpine AS builder

WORKDIR /build
COPY . .

RUN yarn install && yarn build

FROM node:16-alpine AS runner

WORKDIR /app
COPY --from=builder /build .

EXPOSE 3000
CMD [ "yarn", "start" ]
