import { Router } from 'express';
import {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { createProjectSchema, updateProjectSchema } from '../validators/project.js';

const router = Router();

// Public routes
router.get('/', getAllProjects);
router.get('/:id', getProject);

// Protected routes (Admin CRUD)
router.post('/', protect, validate(createProjectSchema), createProject);
router.put('/:id', protect, validate(updateProjectSchema), updateProject);
router.delete('/:id', protect, deleteProject);

export default router;
