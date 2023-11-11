# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . /app

# Expose port and start the application
EXPOSE 3000
CMD ["npm", "start"]
