FROM node:8.11.2-alpine

# Create app directory
WORKDIR /usr/src/app


RUN npm i npm@latest -g

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
ADD src/ ./src
ADD app/ ./app

# COPY src/ ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .
COPY gulpfile.js .


EXPOSE 8585

CMD [ "npm", "start" ]