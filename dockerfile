# Stage 1: Build the React Frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build and Run the Node/Express Backend
FROM node:18-alpine

WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Copy the built React files from the frontend stage
COPY --from=frontend-builder /app/frontend/build ./client/build

EXPOSE 5000
CMD ["npm", "start"]   