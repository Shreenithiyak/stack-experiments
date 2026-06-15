import mongoose, { Schema } from 'mongoose';
import { IProject } from './types.js';

const ProjectSchema: Schema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Project category is required'],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    longDescription: {
      type: String,
      trim: true,
    },
    tech: {
      type: [String],
      required: [true, 'Project tech stack is required'],
      index: true,
    },
    features: {
      type: [String],
      default: [],
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    liveUrl: {
      type: String,
      trim: true,
    },
    metrics: {
      stars: { type: Number, default: 0 },
      forks: { type: Number, default: 0 },
      performanceScore: { type: String, default: '95%' },
      lighthouseScore: { type: String, default: '100' },
    },
    sortOrder: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProject>('Project', ProjectSchema);
