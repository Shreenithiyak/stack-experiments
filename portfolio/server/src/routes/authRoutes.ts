import { Router } from 'express';
import { login, refresh, logout, checkAuth } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema } from '../validators/auth.js';
import { authLimiter } from '../middlewares/rateLimiter.js';
import { protect } from '../middlewares/auth.js';

const router = Router();

router.post('/login', authLimiter, validate(loginSchema), login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/check-auth', protect, checkAuth);

export default router;
