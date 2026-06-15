import mongoose, { Schema } from 'mongoose';
import { IBlog } from './types.js';

const BlogSchema: Schema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Blog slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    summary: {
      type: String,
      required: [true, 'Blog summary is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'Blog tags are required'],
      index: true,
    },
    coverImage: {
      type: String,
      trim: true,
    },
    readTime: {
      type: String,
      required: [true, 'Reading time estimation is required'],
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
      index: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      index: true,
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to automatically update publishedAt when isPublished goes true
BlogSchema.pre<IBlog>('save', function (next) {
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
