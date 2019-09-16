FROM node:10.0.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i -g npm

RUN npm i -g nwb --unsafe-perm --scripts-prepend-node-path

RUN npm install --unsafe-perm --scripts-prepend-node-path

RUN npm audit fix

COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]