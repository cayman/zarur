FROM node:6.6

RUN npm install -g brunch

RUN mkdir -p /usr/client

WORKDIR /usr/client

ADD client/package.json /usr/client/

RUN npm install --allow-root

