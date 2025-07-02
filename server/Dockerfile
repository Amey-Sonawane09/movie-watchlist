# Use official Node image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy project files into container
COPY . .

# Install dependencies
RUN npm install

# Run your server.js
CMD ["node", "server.js"]
