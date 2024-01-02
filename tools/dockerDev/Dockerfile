# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

RUN npm --force install -g yarn wait-port

RUN apk --update add openssh-client openssl && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

# Install project dependencies
RUN yarn


# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js development server
CMD ["yarn", "dev"]
