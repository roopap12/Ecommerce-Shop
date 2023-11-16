# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copy the rest of the project files into the working directory
COPY . .

# Expose port 3000 for the app to be accessible
EXPOSE 3001

# Define the command to run the app
CMD [ "bash", "start.sh" ]
