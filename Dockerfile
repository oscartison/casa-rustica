# Use an official Node.js runtime as the base image
FROM node:19-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN yarn run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]