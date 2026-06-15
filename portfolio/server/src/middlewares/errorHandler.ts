import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger.js';
import { AppError } from '../utils/AppError.js';

interface CustomError extends Error {
  statusCode?: number;
  status?: string;
  code?: number;
  keyValue?: Record<string, any>;
  path?: string;
  errors?: Record<string, any>;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = err.statusCode || 500;
  let status = err.status || 'error';
  let message = err.message || 'Something went wrong';
  let errors: any = undefined;

  // Log the error
  logger.error('Error occurred in request %s %s: %s', req.method, req.originalUrl, err.stack || err.message);

  // Mongoose duplicate key error (code 11000)
  if (err.code === 11000 && err.keyValue) {
    statusCode = 400;
    status = 'fail';
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate field value: '${err.keyValue[field]}'. Please use another value!`;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError' && err.errors) {
    statusCode = 400;
    status = 'fail';
    message = 'Validation failed';
    errors = Object.values(err.errors).map((el) => ({
      field: el.path,
      message: el.message,
    }));
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === 'CastError' && err.path) {
    statusCode = 400;
    status = 'fail';
    message = `Invalid ID path: ${err.path}`;
  }

  // JWT expired error
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    status = 'fail';
    message = 'Your access token has expired. Please log in again.';
  }

  // JWT web token error
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    status = 'fail';
    message = 'Invalid token. Please log in again.';
  }

  // Send response
  if (process.env.NODE_ENV === 'development') {
    res.status(statusCode).json({
      status,
      message,
      errors,
      stack: err.stack,
    });
  } else {
    // Production mode - do not leak stack traces or system internals
    res.status(statusCode).json({
      status,
      message: statusCode === 500 ? 'Internal server error' : message,
      errors,
    });
  }
};
