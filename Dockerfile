# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile --network-timeout 9000000

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN yarn run build

# Stage 2: Create the production image
FROM node:20-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the production-ready files from the previous stage
COPY --from=build /app/package.json /app/yarn.lock /app/.env  ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js /app/next-env.d.ts /app/next-i18next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]