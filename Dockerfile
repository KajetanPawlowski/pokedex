# Use official Node.js LTS image as base
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port (adjust if needed)
EXPOSE 3000

# Start the app
CMD [ "node", "src/index.js" ]