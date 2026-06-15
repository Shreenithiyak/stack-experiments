import { Router } from 'express';
import { getDashboardStats } from '../controllers/statsController.js';
import { protect } from '../middlewares/auth.js';

const router = Router();

// Protected admin stats
router.get('/dashboard', protect, getDashboardStats);

export default router;
