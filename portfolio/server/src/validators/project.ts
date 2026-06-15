import { z } from 'zod';

export const createProjectSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).min(1, 'Title cannot be empty'),
    category: z.string({ required_error: 'Category is required' }).min(1, 'Category cannot be empty'),
    description: z.string({ required_error: 'Description is required' }).min(1, 'Description cannot be empty'),
    longDescription: z.string().optional(),
    tech: z.array(z.string()).min(1, 'At least one tech stack item is required'),
    features: z.array(z.string()).default([]),
    githubUrl: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
    liveUrl: z.string().url('Invalid Live URL').optional().or(z.literal('')),
    metrics: z
      .object({
        stars: z.number().default(0),
        forks: z.number().default(0),
        performanceScore: z.string().default('95%'),
        lighthouseScore: z.string().default('100'),
      })
      .optional(),
    sortOrder: z.number().default(0),
  }),
});

export const updateProjectSchema = z.object({
  body: createProjectSchema.shape.body.partial(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
