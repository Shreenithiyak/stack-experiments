import { Router } from 'express';
import authRoutes from './authRoutes.js';
import projectRoutes from './projectRoutes.js';
import blogRoutes from './blogRoutes.js';
import contactRoutes from './contactRoutes.js';
import statsRoutes from './statsRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/blogs', blogRoutes);
router.use('/contact', contactRoutes);
router.use('/stats', statsRoutes);

export default router;
