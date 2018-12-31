FROM node:boron

RUN mkdir -p /usr/juno/src
WORKDIR /usr/juno

COPY package.json package-lock.json /usr/juno/
COPY package-lock.json package-lock.json /usr/juno/
RUN npm install --production

COPY src/ /usr/juno/src
RUN npm run build

# TODO - user shouldn't be root by default
# RUN useradd app
# RUN chown -R app:app /usr/juno/
# USER app

EXPOSE 3000

CMD ["node", "dist/index.js"]
