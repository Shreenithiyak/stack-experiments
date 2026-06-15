import { z } from 'zod';

export const createBlogSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).min(1, 'Title cannot be empty'),
    slug: z
      .string()
      .min(1, 'Slug cannot be empty')
      .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and dashes')
      .optional(),
    summary: z.string({ required_error: 'Summary is required' }).min(1, 'Summary cannot be empty'),
    content: z.string({ required_error: 'Content is required' }).min(1, 'Content cannot be empty'),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),
    coverImage: z.string().url('Invalid Cover Image URL').optional().or(z.literal('')),
    readTime: z.string({ required_error: 'Read time is required' }).min(1, 'Read time cannot be empty'),
    isPublished: z.boolean().default(false),
  }),
});

export const updateBlogSchema = z.object({
  body: createBlogSchema.shape.body.partial(),
});

export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
