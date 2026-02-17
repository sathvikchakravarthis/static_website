# # Build stage
# FROM node:22-alpine AS builder

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies (reproducible in CI)
# RUN npm ci

# # Copy source code
# COPY . .

# # Build TypeScript application
# RUN npm run build


# # Production stage
# FROM node:22-alpine

# WORKDIR /app
# ENV NODE_ENV=production

# # Copy package files
# COPY package*.json ./

# # Install production dependencies only (modern flag)
# RUN npm ci --omit=dev

# # Copy built application from builder
# COPY --from=builder /app/dist ./dist

# # Cloud Run listens on $PORT (usually 8080)
# EXPOSE 8080
# ENV PORT=8080

# # Start application
# CMD ["node", "dist/index.js"]


# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 8080
ENV PORT=8080
CMD ["node", "dist/index.js"]
