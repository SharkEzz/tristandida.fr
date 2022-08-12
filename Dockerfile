FROM node:16-alpine AS builder

WORKDIR /build
COPY . .

RUN yarn install && yarn build

FROM node:16-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app
COPY --from=builder /build/.next .next
COPY --from=builder /build/package.json .
COPY --from=builder /build/yarn.lock .

RUN yarn install

EXPOSE 3000
CMD [ "yarn", "start" ]
