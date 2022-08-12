FROM node:16-alpine AS builder

ENV NODE_ENV=production

WORKDIR /build
COPY . .

RUN yarn install && yarn build

FROM node:16-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app
COPY --from=builder /build .

EXPOSE 3000
CMD [ "yarn", "start" ]
