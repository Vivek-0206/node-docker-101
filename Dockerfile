# NODEJS alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# copy package.json to the container
COPY ./package.json ./

# Install dependencies
RUN npm install

# copy all files to the container
COPY ./ ./

# Run app
CMD [ "npm", "run" ,"dev" ]
