import { Request, Response, NextFunction } from 'express';
import Blog from '../models/Blog.js';
import { AppError } from '../utils/AppError.js';
import { verifyAccessToken } from '../utils/jwt.js';

// Helper to slugify title
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
};

export const getAllBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { tag, search } = req.query;
    const filterQuery: any = {};

    // 1) Authorization check: if admin, show drafts. Otherwise, only show published.
    let showDrafts = false;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
      const token = authHeader.split(' ')[1];
      try {
        verifyAccessToken(token);
        showDrafts = true;
      } catch (err) {
        // Invalid token, just proceed showing only published
      }
    }

    if (!showDrafts) {
      filterQuery.isPublished = true;
    }

    // Tag filtering
    if (tag) {
      filterQuery.tags = { $in: [tag] };
    }

    // Simple keyword search in title or summary
    if (search) {
      filterQuery.$or = [
        { title: { $regex: search, $options: 'i' } },
        { summary: { $regex: search, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(filterQuery).sort({ publishedAt: -1, createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return next(new AppError('No blog post found with that slug', 404));
    }

    // Authentication check for drafts
    if (!blog.isPublished) {
      let isAuthorized = false;
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer')) {
        const token = authHeader.split(' ')[1];
        try {
          verifyAccessToken(token);
          isAuthorized = true;
        } catch (err) {
          // Token invalid
        }
      }
      if (!isAuthorized) {
        return next(new AppError('No blog post found with that slug', 404));
      }
    }

    // Increment views asynchronously
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const blogData = { ...req.body };
    if (!blogData.slug) {
      blogData.slug = slugify(blogData.title);
    }

    // Check if slug is unique
    const existing = await Blog.findOne({ slug: blogData.slug });
    if (existing) {
      // Append timestamp to make slug unique
      blogData.slug = `${blogData.slug}-${Date.now()}`;
    }

    const newBlog = await Blog.create(blogData);

    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const blogData = { ...req.body };

    if (blogData.title && !blogData.slug) {
      // Re-slugify on title update
      blogData.slug = slugify(blogData.title);
    }

    const blog = await Blog.findByIdAndUpdate(id, blogData, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return next(new AppError('No blog found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return next(new AppError('No blog found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
