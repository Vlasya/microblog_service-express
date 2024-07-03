# Use an official Node.js, and it should be version 16 and above

FROM node:alpine3.20

# Set the working directory in the container

WORKDIR /app

# Copy package.json та package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code
COPY . .

# TypeScript
RUN npx tsc

# Start the application
CMD ["npm", "run", "start:dev"]