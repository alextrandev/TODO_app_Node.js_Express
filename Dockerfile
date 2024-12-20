# Use official node.js runtime as base image
FROM node:22-alpine

# to solve OpenSSL issue when building the container: Error: Could not parse schema engine response: SyntaxError: Unexpected token 'E', "Error load"... is not valid JSON
RUN apk add --no-cache openssl

# Set the working directory in the container
WORKDIR /app

# Copy package files from local to docker container
# Doing this will avoid docker to rebuild the whole image when only the src code changes, instead, it will only rebuild from step 5 (COPY . .)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from local to docker container
COPY . .

# Expose the port the app runs in
EXPOSE 5003

# Run the app
CMD ["node", "./src/server.js"]