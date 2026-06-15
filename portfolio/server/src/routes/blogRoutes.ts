import { Router } from 'express';
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { createBlogSchema, updateBlogSchema } from '../validators/blog.js';

const router = Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/slug/:slug', getBlogBySlug);

// Protected routes (Admin CRUD)
router.post('/', protect, validate(createBlogSchema), createBlog);
router.put('/:id', protect, validate(updateBlogSchema), updateBlog);
router.delete('/:id', protect, deleteBlog);

export default router;
