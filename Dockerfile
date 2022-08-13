FROM node:16-alpine as deps

WORKDIR /build
COPY package.json .
COPY yarn.lock .

RUN yarn

FROM node:16-alpine AS builder

WORKDIR /build
COPY --from=deps /build/node_modules node_modules
COPY . .

RUN yarn prod

FROM node:16-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app
COPY --from=builder /build/.next .next
COPY --from=builder /build/package.json .
COPY --from=builder /build/yarn.lock .
COPY --from=deps /build/node_modules node_modules

EXPOSE 3000
CMD [ "yarn", "start" ]
