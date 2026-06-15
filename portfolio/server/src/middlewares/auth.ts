import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt.js';
import { AppError } from '../utils/AppError.js';

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const protect = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  let token: string | undefined;

  // 1) Getting token from headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please log in to get access.', 401));
  }

  try {
    // 2) Verify token
    const decoded = verifyAccessToken(token);

    // 3) Grant access to protected route by attaching userId
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(new AppError('Invalid token or token expired.', 401));
  }
};
