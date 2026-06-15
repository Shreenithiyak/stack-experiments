import { z } from 'zod';

export const createMessageSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name cannot be empty'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
    subject: z.string({ required_error: 'Subject is required' }).min(1, 'Subject cannot be empty'),
    message: z
      .string({ required_error: 'Message is required' })
      .min(5, 'Message must be at least 5 characters long'),
  }),
});

export type CreateMessageInput = z.infer<typeof createMessageSchema>;
