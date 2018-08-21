# Stage 1 - the build process
FROM node:8.11.3 as build-deps-custom

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env
RUN mkdir -p /frontend
WORKDIR /frontend
COPY . ./

COPY package.json yarn.lock ./
RUN yarn install

CMD if [${APP_ENV} = production ]; \
        then \
        yarn install -g http-server && \
        yarn build && \
        cd build && \
        hs -p 3000; \
    else \
        yarn start; \
    fi
EXPOSE 3000