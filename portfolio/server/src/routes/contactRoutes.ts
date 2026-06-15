import { Router } from 'express';
import {
  submitMessage,
  getAllMessages,
  markAsRead,
  deleteMessage,
} from '../controllers/contactController.js';
import { protect } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { createMessageSchema } from '../validators/message.js';
import { contactLimiter } from '../middlewares/rateLimiter.js';

const router = Router();

// Public route to submit a contact form
router.post('/', contactLimiter, validate(createMessageSchema), submitMessage);

// Protected routes for admin inbox management
router.get('/', protect, getAllMessages);
router.patch('/:id/read', protect, markAsRead);
router.delete('/:id', protect, deleteMessage);

export default router;
