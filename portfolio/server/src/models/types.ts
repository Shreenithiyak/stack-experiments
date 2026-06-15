import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  refreshTokens: string[];
  comparePassword(password: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject extends Document {
  title: string;
  category: string;
  description: string;
  longDescription?: string; // Case study markdown
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: {
    stars?: number;
    forks?: number;
    performanceScore?: string;
    lighthouseScore?: string;
  };
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  summary: string;
  content: string; // Markdown content
  tags: string[];
  coverImage?: string;
  readTime: string;
  views: number;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
