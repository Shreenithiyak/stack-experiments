import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

// Load config
dotenv.config();

import { connectDB } from './config/db.js';
import logger from './config/logger.js';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { apiLimiter } from './middlewares/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Swagger Documentation Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Portfolio API Docs',
      version: '1.0.0',
      description: 'API documentation for the advanced professional portfolio website',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './dist/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Turn off CSP during development for swagger and local requests
}));

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logger requests
app.use((req, res, next) => {
  logger.info(`${req.method} request to ${req.originalUrl}`);
  next();
});

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount main API router with rate limiter
app.use('/api', apiLimiter, apiRouter);

// Base route test
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to MERN Portfolio REST API. Docs are available at /api-docs',
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  logger.info(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  logger.info(`API Docs available at http://localhost:${PORT}/api-docs`);
});

export default app; // For testing
