# Stage 1 - Install
ARG NODE_ENV=production
ARG DOCKER_VERSION=16.5.0
ARG npm_config_loglevel=silent

FROM node:${DOCKER_VERSION} as base
ARG NODE_ENV
ARG npm_config_loglevel
RUN apt-get update && apt-get install -y libgbm-dev libnss3 libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 libgtk-3-0 libx11-xcb1 libasound2 x11-apps libice6 libsm6 libxaw7 libxft2 libxmu6 libxpm4 libxt6 x11-apps xbitmaps libdrm2 libdrm-intel1 libdrm-radeon1 libdrm-nouveau2
USER node
ENV NODE_ENV=$NODE_ENV
ENV npm_config_loglevel=$npm_config_loglevel
ENV NODE_PATH=src
WORKDIR /usr/src/app
COPY . .
RUN npm install

# Stage 2 - Build
FROM install as build
RUN npm run build 

# Stage 2 - Production
FROM base
COPY --from=build --chown=node:node /usr/src/app/build .
USER node
CMD ["npx", "serve", "-s", "-l", "3000"]